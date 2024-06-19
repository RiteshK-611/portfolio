
const projects = [
  {
    id: 1,
    title: "ChatPDF",
    description: "An innovative application that enables you to interact with your PDFs. It leverages Retrieval Augmented Generation (RAG) powered by Gemini AI to generate answers directly from the PDF content. Manage multiple PDF chats, clear conversations, and start fresh whenever needed.",
    img: "/public/assets/projects/chatpdf.jpg", // Assuming images are in public/assets/projects folder
    iconList: [
      "React",
      "Next.js",
      "Typescript",
      "Gemini AI",
      "PostgreSQL",
      "Shacdn UI",
      "Drizzle",
      "Clerk",
    ],
    link: "https://chatspdf.vercel.app",
  },
  {
    id: 2,
    title: "InAR",
    description: "Revolutionize your e-commerce experience with InAR, an Augmented Reality (AR) powered platform. Visualize furniture or products directly within your environment using WebAR technology. Gain a clear understanding of how these items would fit in your space before making a purchase.",
    img: "/public/assets/projects/inar.jpg",
    iconList: [
      "React",
      "Javascript",
      "Node",
      "MongoDB",
      "MaterialUI",
      "Figma",
      "WebAR",
    ],
    link: "https://inar-shop.vercel.app",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description: "A full-fledged e-commerce application replicating the core functionalities of Amazon. It includes essential features like adding items to your cart, logging in/signing up, processing payments through the cart, and more. Enhanced user experience is achieved through features like cart pop-ups and animations.",
    img: "/public/assets/projects/amazon.jpg",
    iconList: [
      "React",
      "Javascript",
      "Node",
      "Firebase",
      "MaterialUI",
      "Stripe",
    ],
    link: "https://amazon-shopping.vercel.app",
  },
  {
    id: 4,
    title: "City Weather",
    description: "Stay informed about weather conditions with City Weather, a Progressive Web Application (PWA). This application retrieves weather data for your chosen city using the OpenWeather API. Access details like climate, temperature, wind speed, visibility, and air quality, all within a user-friendly interface.",
    img: "/public/assets/projects/weather.jpg",
    iconList: [
      "React",
      "Javascript",
      "PWA",
    ],
    link: "https://city-weather-report.netlify.app",
  },
  {
    id: 5,
    title: "Hulu UI Clone",
    description: "A meticulously crafted user interface (UI) replicating the landing page of the Hulu app. This project leverages TheMovieDatabase (TMDB) API to fetch movie data, enabling the display of movies from various genres. Upon hovering over a movie card, a concise overview is presented.",
    img: "/public/assets/projects/hulu.jpg",
    iconList: ["React", "Nextjs", "Javascript", "TailwindCSS"],
    link: "https://hulu-watch.vercel.app/",
  },
];

export default projects;
