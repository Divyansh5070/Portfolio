import { Github, Linkedin, Mail } from "lucide-react";
import { Project } from "./types";

export const personalInfo = {
  name: "Divyansh Sharma",
  role: "Software Developer & Android Engineer",
  bio: "Software Engineering student with strong foundations in Data Structures, Algorithms, and OOP. Experienced in building scalable backend systems and real-time applications using REST APIs, Firebase, and SQL. Currently expanding into iOS development with Swift/SwiftUI to build cross-platform solutions.",
  email: "divyanshsharma5070@gmail.com",
  /** Place your PDF at public/resume/Divyansh_Sharma_Resume.pdf */
  resume: "/resume/Divyansh_sharma_resume.pdf",
  resumeFileName: "Divyansh_sharma_resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/Divyansh5070", icon: Github },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/divyansh-sharma-12a52028a/", icon: Linkedin },
    { label: "Email", url: "mailto:divyanshsharma5070@gmail.com", icon: Mail }
  ]
};

export const skills = [
  "C++", "Java", "Kotlin", "Swift",
  "Jetpack Compose", "SwiftUI", "Firebase",
  "REST APIs", "SQL", "Git",
  "MVVM", "Clean Architecture", "Room",
  "Data Structures & Algorithms", "OOP"
];

export const experiences = [
  {
    id: "exp-1",
    role: "Founding Developer | Android Engineer",
    company: "CUEats (Campus Eats)",
    duration: "Jan 2025 - Present",
    description: "Solo-built and shipped a production Android app on the Play Store used by 50+ students at Chandigarh University. Built mess menus, shops, events, campus map, FCM meal notifications via Cloud Functions, and a Glance home-screen widget — full stack with Firebase, Jetpack Compose, and type-safe Navigation Compose."
  },
  {
    id: "exp-2",
    role: "B.E. in Computer Science",
    company: "Chandigarh University",
    duration: "Aug 2023 - Present",
    description: "Studying Computer Science with focus on Data Structures, Algorithms, Object-Oriented Programming, DBMS, SQL, and Operating Systems. Smart India Hackathon 2025 — Top 45 Teams."
  }
];

// ============================================================================
// PROJECTS DATA
// ============================================================================
// Screenshots live in public/projects/<folder>/ (1.png, 2.png, …)
// Add more images there and list the paths in `images` below.
// ============================================================================
export const projects: Project[] = [
  {
    id: "proj-campus-eats",
    title: "CUEats (Campus Eats)",
    description:
      "Solo-built campus food app shipped to the Play Store — mess menus, shops & canteens, events, OSM campus map, smart meal notifications, budget tracker, and a Glance widget. Used by 50+ students at Chandigarh University.",
    type: "Android",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Cloud Firestore",
      "FCM",
      "Cloud Functions",
      "Navigation Compose",
      "Glance Widget",
      "OSMDroid",
      "WorkManager",
      "DataStore"
    ],
    links: {
      github: "https://github.com/Divyansh5070/Campus-Eatss",
    },
    simulatedUI: "generic",
    demoData: { accentColor: "#f59e0b" },
    images: [
      "/projects/campus-eats/1.png",
      "/projects/campus-eats/2.png",
      "/projects/campus-eats/4.png",
      "/projects/campus-eats/3.png",
      "/projects/campus-eats/5.png"
    ],
    details: {
      role: "Solo Android Engineer & Product Owner",
      timeline: "1.5 years • Play Store • 50+ active users",
      stackSummary:
        "Kotlin, Jetpack Compose, Material 3, Firebase (Auth, Firestore, Realtime DB, Storage, FCM), Cloud Functions for scheduled meal notifications, OSMDroid maps, Coil, Glance widgets, WorkManager, DataStore.",
      challenges: [
        "Delivering low-latency meal updates and notifications across many devices without overloading Firebase.",
        "Shipping a multi-feature app solo — mess, shops, events, map, widgets — while keeping navigation and state manageable.",
        "Debugging FCM token handling and reliable scheduled notifications via Cloud Functions."
      ],
      solutions: [
        "Structured Firestore by hostel and meal type; used Realtime Database where live sync mattered most.",
        "Type-safe Navigation Compose routes and modular screen packages (Mess, Shops, Events, Maps, Widget).",
        "Cloud Functions for weekday/weekend meal windows with per-user opt-in and automatic invalid-token cleanup."
      ],
      learnings: [
        "End-to-end product ownership: idea → Play Store → real users.",
        "Firebase at scale for a campus product — auth, sync, push, and backend functions.",
        "UX that solves a real daily problem beats feature count."
      ]
    }
  },
  {
    id: "proj-my-clock",
    title: "MyClock",
    description:
      "Android productivity app that maps tasks as glowing arcs on an analog clock — see your whole day at a glance. Includes Focus Mode, a task manager, Time Calculator, and Glance home-screen widgets with a glassmorphism dark UI.",
    type: "Android",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Room",
      "DataStore",
      "Coroutines",
      "Flow",
      "Glance Widgets"
    ],
    links: {
      github: "https://github.com/Divyansh5070/MyClock",
    },
    simulatedUI: "generic",
    demoData: { accentColor: "#00D9FF" },
    images: [
      "/projects/my-clock/1.png",
      "/projects/my-clock/2.png",
      "/projects/my-clock/3.png"
    ],
    details: {
      role: "Solo Android Developer",
      timeline: "2025 • Personal productivity app",
      stackSummary:
        "Kotlin, Jetpack Compose, MVVM + Repository, Room (SQLite), DataStore, Kotlin Coroutines & Flow, Glance API for clock and task widgets, BroadcastReceivers for reminders.",
      challenges: [
        "Rendering tasks as accurate, color-coded arcs on a custom analog clock face.",
        "Keeping Focus Mode timer, task list, and widgets in sync with the same source of truth.",
        "Balancing a distinctive glassmorphism UI with smooth Compose performance."
      ],
      solutions: [
        "Custom clock rendering with per-task color arcs and 12h/24h format support.",
        "Room + Repository as single source of truth; Flow-driven UI updates across screens and widgets.",
        "Reusable Compose components and a consistent neon-cyan accent palette (#00D9FF)."
      ],
      learnings: [
        "Visualizing time circularly changes how users plan their day.",
        "Room + MVVM patterns for a medium-sized Compose app.",
        "Building widgets with Glance alongside a full in-app experience."
      ]
    }
  },
  {
    id: "proj-flatpool-manager",
    title: "FlatPool Manager",
    description:
      "Modern Android app for managing shared flat expenses with real-time Firebase sync, role-based permissions (admin vs members), transaction history, and integrated flatmate chat.",
    type: "Android",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Realtime Database",
      "MVVM",
      "Navigation Compose",
      "Coroutines",
      "StateFlow"
    ],
    links: {
      github: "https://github.com/Divyansh5070/FlatPoolManager",
    },
    simulatedUI: "generic",
    demoData: { accentColor: "#a855f7" },
    images: [
      "/projects/flatpool-manager/1.png",
      "/projects/flatpool-manager/2.png",
      "/projects/flatpool-manager/3.png"
    ],
    details: {
      role: "Full-stack Android Developer",
      timeline: "2025 • Built for real flatmates",
      stackSummary:
        "Kotlin, Jetpack Compose, Firebase Authentication, Firebase Realtime Database, MVVM, Navigation Compose, Kotlin Coroutines & StateFlow.",
      challenges: [
        "Enforcing role-based access — only admin can add money; all members can log expenses.",
        "Keeping pool balance and chat messages consistent in real time across devices.",
        "Designing a simple UX for non-technical flatmates."
      ],
      solutions: [
        "Role flags in Firebase with UI gated by admin/member permissions.",
        "Realtime Database listeners for pool balance, transactions, and chat with reactive StateFlow in ViewModels.",
        "Gradient login, quick-test login buttons, and clear balance cards with color-coded states."
      ],
      learnings: [
        "Real-time collaborative apps need clear permission models from day one.",
        "Firebase Realtime Database fits chat and live balance updates well.",
        "Shipping for people you live with is the fastest feedback loop."
      ]
    }
  }
];
