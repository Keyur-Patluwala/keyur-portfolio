export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "CineScope - Movie Browsing Platform",
    desc: "CineScope is a movie browsing web app that fetches data from the TMDB API, allowing users to explore movies. It features trending movies section.",
    subdesc:
      "Built  with ReactJS, Tailwind CSS,Typescript, Appwrite, CineScope is designed for optimal performance.",
    href: "https://github.com/Keyur-Patluwala/CineScope-Movie-App",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "Scannion - QR-based feedback and admin dashboard",
    desc: "Scannion is a QR-based feedback collection system that allows users to submit responses via a scanned form, instantly analyzed for sentiment. Admins can view real-time feedback, sentiment summaries, and response analytics on a dedicated dashboard.",
    subdesc:
      "Built using PHP, HTML/CSS, JavaScript, and MySQL for backend processing and data storage. Integrated Python for sentiment analysis and used charts/graphs for admin-side visualization.",
    href: "https://github.com/Keyur-Patluwala/Scannion",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      // {
      //   id: 1,
      //   name: "React.js",
      //   path: "/assets/react.svg",
      // },
      // {
      //   id: 2,
      //   name: "TailwindCSS",
      //   path: "assets/tailwindcss.png",
      // },
      // {
      //   id: 3,
      //   name: "TypeScript",
      //   path: "/assets/typescript.png",
      // },
      // {
      //   id: 4,
      //   name: "Framer Motion",
      //   path: "/assets/framer.png",
      // },
    ],
  },
  {
    title: "AI-Powered Travel Dashboard",
    desc: "Built a responsive admin dashboard with React Router v7, Syncfusion UI, and real-time analytics.Integrated Gemini AI for generating personalized trip itineraries with images from the Unsplash API.",
    subdesc:
      "Implemented Google OAuth authentication and role-based access using Appwrite.Added Sentry for error tracking",
    href: "https://github.com/Keyur-Patluwala/travel-agency-dashboard",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Gyanmanjari Institute of Technology",
    pos: "BE in Computer Engineering - 9.04 CGPA",
    duration: "2022 - 2026",
    title:
      "Relevant coursework – Web Programming, Software Engineering, Algorithms, Data Structures, Python for Data Science, Object Oriented Programming, Database Management System",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Silver Bells Public School",
    pos: "Higher Secondary Education (CBSE)",
    duration: "2021 - 2022",
    title: "Percentage:93",
    icon: "/assets/framer.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Silver Bells Public School",
    pos: "Secondary Education (CBSE)",
    duration: "2019 - 2020",
    title: "Percentage:92",
    icon: "/assets/framer.svg",
    animation: "salute",
  },
];
