export type Process = {
  title: string;
  icon: string;
  description: string;
};

export const processSteps = [
  { 
    key: "learn", 
    icon: "/icons/book.svg"
  },

  { 
    key: "practice",
    icon: "/icons/code.svg"
  },

  { 
    key: "results", 
    icon: "/icons/rocket.svg"
  }
];
