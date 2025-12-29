import logo from "./logonav.svg";

export const asset = {
  logo,
};

export const appPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$5",
    credits: 100,
    description: "Start Now, scale up as you grow.",
    features: [
      "Up to 20 Creations",
      "Limited Revisions",
      "Basic AI Models",
      "Email Support",
      "Basic Analytics",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    credits: 400,
    description: "Add credits to create more projects.",
    features: [
      "Up to 80 Creations",
      "Extended Revisions",
      "Advanced AI Models",
      "Priority Email Support",
      "Advanced Analytics",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$49",
    credits: 100,
    description: "Add credits to create more projects.",
    features: [
      "Up to 200 Creations",
      "Increased Revisions",
      "Advanced AI Models",
      "Email + Chat Support",
      "Advanced Analytics",
    ],
  },
];

const dummyUser = {
  id: "user-001",
  email: "ghebi@example.com",
  fullName: "Ghebi Armando",
  imageUrl: "https://avatars.githubusercontent.com/u/1",
  name: "OntongGhebi",
  image: "https://avatars.githubusercontent.com/u/1",
};

export const dummyProjects = [
  {
    id: "a1b2c3d4-e001-4f9a-9c12-websitebuilder01",
    name: "AI Portfolio Website",
    initial_prompt:
      "Create a modern developer portfolio website with hero section, about me, skills, projects, and contact form using Tailwind CSS with smooth animations.",
    current_code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Developer Portfolio showcasing projects, skills, and experience" />
  <meta name="keywords" content="developer, portfolio, web development, programming" />
  <meta name="author" content="Your Name" />
  <title>Developer Portfolio</title>

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-950 text-gray-100">

  <section class="min-h-screen flex items-center justify-center text-center px-6">
    <div>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span class="text-blue-500">Your Name</span>
      </h1>
      <p class="text-gray-400 max-w-xl mx-auto">
        A passionate web developer building modern, fast, and scalable web applications.
      </p>
    </div>
  </section>

</body>
</html>
    `,
    createdAt: "2025-12-27T09:00:00.000Z",
    updatedAt: "2025-12-27T09:00:00.000Z",
    user: dummyUser,
    userId: "user-001",
    isPublished: false,
    versionId: "v1",

    conversation: [
      {
        id: "msg-001",
        role: "user",
        content:
          "Create a modern developer portfolio website with hero section, about me, skills, projects, and contact form.",
        timestamp: "2025-12-27T09:00:00.000Z",
      },
      {
        id: "msg-002",
        role: "assistant",
        content:
          "Here is a clean and modern developer portfolio website using Tailwind CSS.",
        timestamp: "2025-12-27T09:00:10.000Z",
      },
    ],

    versions: [],
    current_version_index: "0",
  },
  {
    id: "proj-002",
    name: "Startup Landing Page",
    initial_prompt:
      "Build a startup landing page with hero section, features, pricing, and call-to-action.",
    current_code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Modern startup landing page" />
  <title>Startup Landing</title>

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-950 text-gray-100">

  <!-- Hero -->
  <section class="min-h-screen flex items-center justify-center text-center px-6">
    <div>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Build Faster with <span class="text-indigo-500">StartupX</span>
      </h1>
      <p class="text-gray-400 max-w-xl mx-auto">
        The all-in-one platform to launch and scale your startup.
      </p>
      <div class="mt-8">
        <a href="#pricing" class="bg-indigo-600 px-6 py-3 rounded hover:bg-indigo-700 transition">
          Get Started
        </a>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 bg-gray-900">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div class="bg-gray-800 p-6 rounded">🚀 Fast Setup</div>
      <div class="bg-gray-800 p-6 rounded">🔒 Secure</div>
      <div class="bg-gray-800 p-6 rounded">📈 Scalable</div>
    </div>
  </section>

</body>
</html>
`,
    createdAt: "2025-12-26T10:00:00.000Z",
    updatedAt: "2025-12-26T10:10:00.000Z",
    user: dummyUser,
    userId: "user-001",
    isPublished: true,
    versionId: "v1",
    conversation: [
      {
        id: "msg-003",
        role: "user",
        content: "Create a modern startup landing page.",
        timestamp: "2025-12-26T10:00:00.000Z",
      },
    ],
    versions: [],
    current_version_index: "0",
  },

  {
    id: "proj-003",
    name: "SaaS Dashboard UI",
    initial_prompt:
      "Design a SaaS admin dashboard with sidebar navigation, charts, and stats cards.",
    current_code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Modern startup landing page" />
  <title>Startup Landing</title>

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-950 text-gray-100">

  <!-- Hero -->
  <section class="min-h-screen flex items-center justify-center text-center px-6">
    <div>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Build Faster with <span class="text-indigo-500">StartupX</span>
      </h1>
      <p class="text-gray-400 max-w-xl mx-auto">
        The all-in-one platform to launch and scale your startup.
      </p>
      <div class="mt-8">
        <a href="#pricing" class="bg-indigo-600 px-6 py-3 rounded hover:bg-indigo-700 transition">
          Get Started
        </a>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 bg-gray-900">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div class="bg-gray-800 p-6 rounded">🚀 Fast Setup</div>
      <div class="bg-gray-800 p-6 rounded">🔒 Secure</div>
      <div class="bg-gray-800 p-6 rounded">📈 Scalable</div>
    </div>
  </section>

</body>
</html>
`,
    createdAt: "2025-12-25T08:00:00.000Z",
    updatedAt: "2025-12-25T08:20:00.000Z",
    user: dummyUser,
    userId: "user-002",
    isPublished: false,
    versionId: "v2",
    conversation: [
      {
        id: "msg-004",
        role: "user",
        content: "Create a SaaS dashboard UI.",
        timestamp: "2025-12-25T08:00:00.000Z",
      },
    ],
    versions: [],
    current_version_index: "0",
  },

  {
    id: "proj-004",
    name: "Personal Blog Website",
    initial_prompt:
      "Create a personal blog website with article list, detail page, and responsive layout.",
    current_code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Personal Blog</title>

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-950 text-gray-100">

  <header class="py-10 text-center">
    <h1 class="text-4xl font-bold">My Personal Blog</h1>
    <p class="text-gray-400 mt-2">Thoughts, stories, and ideas</p>
  </header>

  <main class="max-w-4xl mx-auto px-6 space-y-8">
    <article class="bg-gray-900 p-6 rounded">
      <h2 class="text-2xl font-semibold mb-2">First Blog Post</h2>
      <p class="text-gray-400">This is a short preview of the article...</p>
    </article>

    <article class="bg-gray-900 p-6 rounded">
      <h2 class="text-2xl font-semibold mb-2">Second Blog Post</h2>
      <p class="text-gray-400">Another interesting story goes here...</p>
    </article>
  </main>

</body>
</html>
`,
    createdAt: "2025-12-24T14:00:00.000Z",
    updatedAt: "2025-12-24T14:10:00.000Z",
    user: dummyUser,
    userId: "user-003",
    isPublished: true,
    versionId: "v1",
    conversation: [
      {
        id: "msg-005",
        role: "user",
        content: "Build a simple personal blog website.",
        timestamp: "2025-12-24T14:00:00.000Z",
      },
    ],
    versions: [],
    current_version_index: "0",
  },

  {
    id: "proj-005",
    name: "Analytics Dashboard",
    initial_prompt:
      "Create an analytics dashboard with charts, KPIs, and responsive grid layout.",
    current_code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Analytics Dashboard</title>

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-950 text-gray-100">

  <section class="p-8">
    <h1 class="text-3xl font-bold mb-6">Analytics Overview</h1>

    <div class="grid md:grid-cols-4 gap-6">
      <div class="bg-gray-800 p-6 rounded">Visitors</div>
      <div class="bg-gray-800 p-6 rounded">Sessions</div>
      <div class="bg-gray-800 p-6 rounded">Bounce Rate</div>
      <div class="bg-gray-800 p-6 rounded">Conversions</div>
    </div>
  </section>

</body>
</html>
`,
    createdAt: "2025-12-23T11:00:00.000Z",
    updatedAt: "2025-12-23T11:15:00.000Z",
    user: dummyUser,
    userId: "user-004",
    isPublished: false,
    versionId: "v1",
    conversation: [
      {
        id: "msg-006",
        role: "user",
        content: "Create an analytics dashboard layout.",
        timestamp: "2025-12-23T11:00:00.000Z",
      },
    ],
    versions: [],
    current_version_index: "0",
  },
];

export const dummyConversations = [
  {
    id: "msg-001",
    role: "user",
    content: "Create a modern developer portfolio website.",
    timestamp: "2025-12-27T09:00:00.000Z",
  },
  {
    id: "msg-002",
    role: "assistant",
    content:
      "Sure! I will create a modern portfolio website with hero, about, skills, and contact sections using Tailwind CSS.",
    timestamp: "2025-12-27T09:00:05.000Z",
  },
  {
    id: "msg-003",
    role: "user",
    content: "Add smooth animations and make the design dark-themed.",
    timestamp: "2025-12-27T09:01:00.000Z",
  },
  {
    id: "msg-004",
    role: "assistant",
    content:
      "Done. I've applied a dark theme, hover transitions, and smooth layout spacing.",
    timestamp: "2025-12-27T09:01:06.000Z",
  },
  {
    id: "msg-005",
    role: "user",
    content: "Can you also add a responsive skills grid section?",
    timestamp: "2025-12-27T09:02:00.000Z",
  },
  {
    id: "msg-006",
    role: "assistant",
    content:
      "Yes, I've added a responsive grid layout for the skills section that adapts to mobile and desktop screens.",
    timestamp: "2025-12-27T09:02:08.000Z",
  },
];
