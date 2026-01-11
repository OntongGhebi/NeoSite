import { Request, Response } from "express";
import prisma from "../lib/prisma.js";
import openai from "../configs/openai.js";
import { success } from "better-auth";

// Controller function to make revision
export const makeRevision = async (req: Request, res: Response) => {
  const userId = req.userId;
  try {
    const { projectId } = req.params;
    const { message } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userId || !user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    if (user.credits < 2) {
      return res.status(403).json({
        success: false,
        message: "Add more credits to make changes",
      });
    }

    const currentProject = await prisma.websiteProject.findUnique({
      where: { id: projectId, userId },
      include: { versions: true },
    });

    if (!currentProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await prisma.conversation.create({
      data: {
        role: "user",
        content: message,
        projectId,
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: 5 } },
    });

    // Enhance user prompt
    const promptEnhanceResponse = await openai.chat.completions.create({
      model: "z-ai/glm-4.5-air:free",
      messages: [
        {
          role: "system",
          content: `
          You are a prompt enhancement specialist. The user wants to make changes to their website. Enhance their request to be more specific and actionable for a web developer.

          Enhance this by:
          1. Being specific about what elements to change
          2. Mentioning design details (colors, spacing, sizes)
          3. Clarifying the desired outcome
          4. Using clear technical terms

          Return ONLY the enhanced prompt, nothing else. 
          Keep it concise (1-2 sentences).`,
        },
        { role: "user", content: `User's request "${message}"` },
      ],
    });

    const enhancePrompt = promptEnhanceResponse.choices[0].message.content;

    await prisma.conversation.create({
      data: {
        role: "assistant",
        content: `I've enhanced tour prompt to: "${enhancePrompt}"`,
        projectId,
      },
    });
    await prisma.conversation.create({
      data: {
        role: "assistant",
        content: "Now making changes to your website...",
        projectId,
      },
    });

    // Generate website code
    const codeGenerationResponse = await openai.chat.completions.create({
      model: "z-ai/glm-4.5-air:free",
      messages: [
        {
          role: "system",
          content: `
        You are an expert web developer. 
        
        CRITICAL REQUIREMENTS:
        - Return ONLY the complete HTML code with the requested changes.
        - Use Tailwind CSS for ALL styling (NO custom CSS).
        - Use Tailwind utility classes for all styling changes
        - Include all JavaScript in <script> tags before closing </body>
        - Make sure it's a complete, standalone HTML document with Tailwind CSS
        - Return the HTML Code Only, nothing else.
        
        Apply the requested changes while maintaining the Tailwind CSS styling approach
        `,
        },
        {
          role: "user",
          content: `Here is the current website code: "${currentProject.current_code}" The user wants this change "${enhancePrompt}"`,
        },
      ],
    });

    const code = codeGenerationResponse.choices[0].message.content || "";

    const version = await prisma.version.create({
      data: {
        code: code
          .replace(/```[a-z]*\n?/gi, "")
          .replace(/```$/g, "")
          .trim(),
        description: "changes made",
        projectId,
      },
    });

    await prisma.conversation.create({
      data: {
        role: "assistant",
        content:
          "I've made the changes to your website! You can now preview it and request any further changes",
        projectId,
      },
    });

    await prisma.websiteProject.update({
      where: { id: projectId },
      data: {
        current_code: code
          .replace(/```[a-z]*\n?/gi, "")
          .replace(/```$/g, "")
          .trim(),
        current_version_index: version.id,
      },
    });

    res.json({
      success: true,
      message: "Revision made successfully",
    });
  } catch (error: any) {
    await prisma.user.update({
      where: { id: userId },
      data: { credits: { increment: 5 } },
    });
    console.log(error.code || error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
