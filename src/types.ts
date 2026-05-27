export interface ProjectDemoData {
  accentColor?: string; // e.g. '#b4ed9d'
  backgroundColor?: string; // e.g. '#0d160b'
  subtitle?: string; // e.g. 'Good morning,'
  headerTitle?: string; // e.g. "Let's move!"
  stats?: {
    label: string;
    value: string;
    subValue?: string;
    icon?: "TrendingUp" | "Heart" | "Play" | "ShoppingBag" | "Star" | "Target" | "Flame" | "Code";
  }[];
  listItems?: {
    title: string;
    subtitle: string;
    rightText?: string;
    icon?: "Play" | "ShoppingBag" | "Heart" | "Star" | "Flame" | "TrendingUp" | "Code" | "Target";
    bg?: string; // e.g. 'bg-blue-500/20'
    c?: string; // e.g. 'text-blue-400'
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: "iOS" | "Android" | "Cross-Platform";
  technologies: string[];
  links: {
    github?: string;
    playStore?: string;
    appStore?: string;
  };
  simulatedUI: "fitness" | "commerce" | "generic";
  demoData?: ProjectDemoData;
  /**
   * One or more real screenshots for this project.
   * Provide paths relative to the public root, e.g. "/projects/campus-eats/1.png".
   */
  images?: string[];
  /**
   * Optional richer case-study style details used on the dedicated project page.
   */
  details?: {
    role?: string;
    timeline?: string;
    stackSummary?: string;
    challenges?: string[];
    solutions?: string[];
    learnings?: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}
