import {
  Award,
  DatabaseZap,
  Globe,
  Heart,
  Repeat,
  Settings,
  Smartphone,
  Star,
  Zap,
  Blocks,
  Home,
  ZapIcon,
  HeartIcon,
  AwardIcon,
  Contact,
  ServerIcon,
} from "lucide-react";

export const data = [
  {
    title: "CMS",
    description:
      "A Personal CMS (Content Management System) built with Next.js allows users to create, edit, and manage their own content like blogs, projects, or media. It features a user-friendly dashboard with real-time updates and API integration for data handling. Designed for individuals, it offers full control over personal content with a sleek, responsive UI.",
    image: "/cms.png",
    url: "https://cms-sooty-nine.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "My Personal Portfolio reflect my love for clean code, intuitive design, and real-world problem solving. From dynamic forms and interactive dashboards to personal websites and fully responsive landing pages, I’ve built solutions that combine functionality with modern aesthetics. Each project is an opportunity to grow, learn, and bring unique ideas to life.",
    image: "/portfolio-img.png",
    url: "https://codebyrenu.netlify.app/",
  },

  {
    title: "Qr-code Generator and Scanner",
    description:
      "A QR Code Generator built with Next.js allows users to input text or URLs and instantly generate corresponding QR codes. It leverages React components for real-time updates and seamless user experience. The app uses libraries like `qrcode` or `react-qr-code` for efficient QR code rendering.",
    image: "/qr-code.png",
    url: "https://qr-code-generator-zeta-two.vercel.app/",
  },

  {
    title: "To-Do App",
    description:
      "A Todo App built with Next.js allows users to add, edit, delete, and mark tasks as complete in a simple and intuitive interface. It uses React state management for real-time task updates and efficient UI rendering. The app helps users stay organized and manage daily tasks effectively.",
    image: "/todo.png",
    url: "https://todo-4ulc.vercel.app/",
  },

  {
    title: "Text-Manipulator",
    description:
      "A Text Manipulator App built with Next.js allows users to perform various text operations like case conversion, text formatting, and more. It features a clean and intuitive interface for easy text manipulation. The app is designed for efficiency and ease of use, making text editing tasks a breeze.",
    image: "/textUtils.png",
    url: "https://textutils-renu.netlify.app/",
  },
];

export const service = [
  {
    icon: Blocks,
    title: " Modern Front-End Development",
    image: "/frontend.png",

    description:
      "I specialize in building dynamic, high-performance user interfaces using Next.js and React. I follow component-based architecture and best coding practices to ensure your front-end is scalable, maintainable, and optimized for performance. My use of Tailwind CSS allows for rapid UI development with consistent design systems.",
  },
  {
    icon: Smartphone,
    image: "/ui.png",

    title: "Responsive UI/UX Design",
    description:
      "I design and build responsive interfaces that adapt seamlessly to different screen sizes. Using Tailwind CSS and component libraries like DaisyUI, I ensure every page is visually appealing and provides an intuitive user experience across mobile, tablet, and desktop devices.",
  },
  {
    icon: Settings,
    image: "/authentication.png",
    title: "Authentication & Access Control",
    description:
      "Security and user access management are essential for modern apps. I integrate robust authentication systems using Clerk and NextAuth, providing smooth login flows, session handling, and role-based access control to keep your users and data safe.",
  },
  {
    icon: Repeat,
    title: "API Integration & Dynamic Data",
    image: "/api.png",

    description:
      "Bringing dynamic content to life is my strength. I connect front-end interfaces to external services using REST APIs, GraphQL, and platforms like RapidAPI. Whether it's AI-powered tools or third-party data, I ensure efficient integration and display of live content.",
  },
  {
    icon: DatabaseZap,
    image: "/backend.png",

    title: "Backend & Database Support",
    description:
      "While front-end is my specialty, I have solid experience on the backend as well. I work with MongoDB and Prisma to set up and manage databases, perform CRUD operations, and handle server-side logic for features like user profiles, content storage, or custom dashboards.",
  },
  {
    icon: Globe,
    title: "Full Stack Web Applications",
    image: "/fullstack.png",

    description:
      "I develop full stack applications that connect clean user interfaces with reliable backend systems. Perfect for admin dashboards, content management systems (CMS), or internal tools, I take care of both the UI and the essential backend functionality.",
  },
  {
    icon: Zap,
    title: "State Management & UI Libraries",
    image: "/stateManagement.png",
    description:
      "Complex web apps require effective state management. I use Zustand for managing global and local state, and ShadCN to create accessible and elegant UI components. These tools help in building apps that are both powerful and user-friendly.",
  },
];

export const Choose = [
  {
    icon: Award,
    title: "Strong Technical Skills",
    desc: "Skilled in Next.js, React.js, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS, and MongoDB — I build modern, responsive, and dynamic web applications with clean code and user-friendly interfaces.",
  },
  {
    icon: Star,

    title: "24/7 Availability",
    desc: "I’m always just a message away. Whether it’s for updates, quick changes, or urgent issues — I ensure prompt responses and support around the clock.",
  },

  {
    icon: Heart,

    title: "Performance First",
    desc: "Fast-loading, optimized, and SEO-friendly websites are my priority — ensuring a smooth experience for users and better ranking for businesses.",
  },
];

export const tools = [
  {
    skill: "DSA",
    color: "#c90d0d",
  },
  {
    skill: "React.js",
    color: "orange",
  },
  {
    skill: "Next.js",
    color: "#58c5de",
  },
  {
    skill: "Bootstrap",
    color: "#540202",
  },
  {
    skill: "Shadcn UI",
    color: "brown",
  },
  {
    skill: "Typescript",
    color: "#787864",
  },
  {
    skill: "Next Auth",
    color: "#c977c9",
  },
  {
    skill: "Prisma",
    color: "purple",
  },

  {
    skill: "vercel",
    color: "#0e0e5c",
  },

  {
    skill: "Mongo DB",
    color: "black",
  },

  {
    skill: "Git",
    color: "pink",
  },

  {
    skill: "Zustand",
    color: "#5de35d",
  },

  {
    skill: "Tailwind",
    color: "#a396ea",
  },
  {
    skill: "HTML",
    color: "#eaea42",
  },
  {
    skill: "CSS",
    color: "#e0693b",
  },
  {
    skill: "Javascript",
    color: "#523bcf",
  },
  {
    skill: "Clerk",
    color: "#ca5290",
  },
  {
    skill: "NextAuth",
    color: "#439192",
  },
  {
    skill: "Node.js",
    color: "#1d4b63",
  },
];

export const navLinks = [
  {
    title: "HOME",
    url: "/#",
    icon: Home,
  },
  {
    title: "ABOUT",
    url: "/#about",
    icon: ZapIcon,
  },
  {
    title: "SERVICES",
    url: "/#services",
    icon: ServerIcon,
  },
  {
    title: "SKILLS",
    url: "/#skills",
    icon: AwardIcon,
  },
  {
    title: "PROJECTS",
    url: "/#projects",
    icon: HeartIcon,
  },

  {
    title: "CONTACT",
    url: "/#contact",
    icon: Contact,
  },
];
