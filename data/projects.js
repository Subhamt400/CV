// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "Live E-Commerce/Business Platform",
    category: "Professional Work",
    description: "A fully functional, live website developed for a client. Built with a custom PHP backend and optimized MySQL database to handle real-time user data and transactions.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    liveLink: "https://your-client-website-1.com", // REPLACE THIS
    repoLink: null, // Keep null if code is private/client property
    image: "/images/project1.png", // You will need to add screenshots to public/images/
  },
  {
    id: 2,
    title: "Corporate Portfolio Website",
    category: "Professional Work",
    description: "Designed and deployed a responsive corporate website. Focused on SEO optimization and fast load times using vanilla JavaScript and raw CSS.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveLink: "https://your-client-website-2.com", // REPLACE THIS
    repoLink: null,
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "Assistive IoT Communication Glove",
    category: "Embedded Systems",
    description: "A smart glove designed to help non-verbal individuals communicate. Uses flex sensors to detect hand gestures and converts them into spoken audio via an Arduino Nano.",
    techStack: ["Arduino", "C++", "Sensors", "IoT"],
    liveLink: null,
    repoLink: "https://github.com/yourusername/glove-project", // REPLACE THIS
    image: "/images/glove-project.png",
  },
  {
    id: 4,
    title: "10-Channel RC Transmitter",
    category: "Hardware",
    description: "A custom-built remote control transmitter using the ESP-WROOM-32. Handles complex signal processing for long-range drone/vehicle control.",
    techStack: ["ESP32", "C++", "Wireless Comm", "Electronics"],
    liveLink: null,
    repoLink: "https://github.com/yourusername/rc-transmitter",
    image: "/images/rc-project.png",
  },
  {
    id: 5,
    title: "Java Data Structures Library",
    category: "Computer Science",
    description: "A comprehensive library implementing core data structures (Linked Lists, Trees, Graphs) from scratch to demonstrate algorithmic efficiency.",
    techStack: ["Java", "Algorithms", "Data Structures"],
    liveLink: null,
    repoLink: "https://github.com/yourusername/ds-library",
    image: "/images/java-code.png",
  }
];