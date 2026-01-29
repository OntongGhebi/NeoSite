import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  deleteProject,
  getProjectById,
  getProjectPreview,
  getPublishedProjects,
  makeRevision,
  rollbackToVersion,
  saveProject,
} from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.post("/revision/:projectId", protect, makeRevision);
projectRouter.put("/save/:projectId", protect, saveProject);
projectRouter.get(
  "/rollback/:projectId/:versionId",
  protect,
  rollbackToVersion,
);
projectRouter.delete("/:projectId", protect, deleteProject);
projectRouter.get("/preview/:projectId", protect, getProjectPreview);
projectRouter.get("/isPublished", getPublishedProjects);
projectRouter.get("/isPublished/:projectId", getProjectById);

export default projectRouter;
