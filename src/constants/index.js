import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Next Js Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "360xpertSolutions",
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and Next Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Omnit Enterprise",
    iconBg: "#383E56",
    date: "Jan 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but this guy proved me wrong.",
    name: "Mazin",
    designation: "CEO",
    company: "Uix Services",
  
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Faisal does.",
    name: "Ammar Alam",
    designation: "CEO",
    company: "Omnit Enterprises",
  },
  {
    testimonial:
      "After Faisal optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Mubashir",
    designation: "Founder",
    company: "Broga Thrift",
  },
];

const projects = [
  {
    name: "UIX",
    description: "A website custom made for according to the clients requirement which shocwcases their work and vision a cool way.",
   
    source_code_link: "https://uixservices.com",
    image: "./src/assets/uix.png"
  },
  {
    name: "OMNIT",
    description:
      "A website custom made for according to the clients requirement which shocwcases their work and vision a cool way.",
      image: "./src/assets/omnit.png",

    source_code_link: "https://omnitenterprise.com",
  },
  {
    name: "Data Visualization",
    description:
      "A website that visualizes data from a CSV file and displays in the format of charts and graphs and is completely dynamic",
      image: "./src/assets/data.png",

    source_code_link: "https://github.com/FaisalIrfan258/Data-Visualization-React",
  },
];

export { services, technologies, experiences, testimonials, projects };
