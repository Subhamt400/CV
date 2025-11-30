// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "Live E-Commerce/Business Platform",
    category: "Professional Work",
    description: "A fully functional, live website developed for a client. Built with a custom PHP backend and optimized MySQL database to handle real-time user data and transactions.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    liveLink: "https://your-client-website-1.com", // REPLACE THIS
    repoLink: null,
    image: "/images/project1.png",
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
    title: "IoT Sensor Dashboard",
    category: "IoT & Web Development",
    description: "A full-stack monitoring system for ESP8266 devices. Features a secure PHP backend with authentication, a responsive Bootstrap 5 dashboard, and real-time data visualization.",
    techStack: ["PHP", "MySQL", "Bootstrap 5", "ESP8266", "REST API"],
    liveLink: null,
    repoLink: "https://github.com/Subhamt400/ESP-IoT-Monitor",
    image: "/images/iot-dashboard.png", // Don't forget to add a screenshot here
  },
  {
    id: 4,
    title: "ESP8266 Gemini AI Client",
    category: "AI & Embedded Systems",
    description: "An AI-powered chatbot running on a microcontroller. Connects directly to Google's Gemini API via HTTPS to answer questions on the Serial Monitor using ArduinoJson.",
    techStack: ["C++", "Google Gemini API", "ESP8266", "ArduinoJson"],
    liveLink: null,
    repoLink: "https://github.com/Subhamt400/ESPGemini",
    image: "/images/gemini-client.png", // Don't forget to add a screenshot here
  },
  {
    id: 5,
    title: "HTTPS Random Number Fetcher",
    category: "Embedded Systems",
    description: "A technical demonstration of handling secure HTTPS GET requests on ESP8266. Fetches and parses JSON data from a remote PHP endpoint without heavy libraries.",
    techStack: ["C++", "ESP8266", "HTTPS", "API Integration"],
    liveLink: null,
    repoLink: "https://github.com/Subhamt400/ESP8266",
    image: "/images/https-fetcher.png", // Don't forget to add a screenshot here
  }
];