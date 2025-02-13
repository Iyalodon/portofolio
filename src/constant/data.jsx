import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "../assets/project-1.png";
import Work2 from "../assets/project-2.png";
import Work3 from "../assets/project-4.png";
import Work4 from "../assets/project-3.png";
import Work5 from "../assets/project-5.jpg";
import Work6 from "../assets/project-6.png";
import Work7 from "../assets/project-7.png";

import Theme1 from "../assets/purple.png";
import Theme2 from "../assets/red.png";
import Theme3 from "../assets/blueviolet.png";
import Theme4 from "../assets/blue.png";
import Theme5 from "../assets/goldenrod.png";
import Theme6 from "../assets/magenta.png";
import Theme7 from "../assets/yellowgreen.png";
import Theme8 from "../assets/orange.png";
import Theme9 from "../assets/green.png";
import Theme10 from "../assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Samsu",
  },

  {
    id: 2,
    title: "Middle Name : ",
    description: "Rijal",
  },

  {
    id: 3,
    title: "Age : ",
    description: "29 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indonesian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Pasuruan, Indonesia",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+62 82217364161",
  },

  {
    id: 8,
    title: "Email : ",
    description: "rijalman.(dot)sr@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Indonesia, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "97+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Administration Project <span> PT. PLN Enjiniring </span>",
    desc: "Created and archived letters and other documents at PT. Prima Layanan Nasional Engineering, Created files, recorded progress information, and monitored the work status of each construction project within PT. Prima National Service Engineering, Assisted construction senior manager reports, Stored and maintained archives and similar documents required for activities at PT. Prima Layanan Nasional Engineering, Carried out other administrative tasks according to the needs of PT. Prima Layanan Nasional Engineering.",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2019 - 2021",
    title:
      "Physics Teacher <span> Darul Hijrah Leadership Boarding School </span>",
    desc: "Teach physic to Senior High School Students. Teaching from 10th grade (Basic Chemistry, Green Chemistry, Renewable Energy), 11th grade (from Vector to Thermodinamics), 12th Grade (from DC current to Modern Physics)",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Full-Stack Web Developer<span> Purwadhika Digital School; </span>",
    desc: "Final Project Score: 81.5 of 100",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title:
      "Bachelor of engineering in material engineering <span> Bandung Institute of Technology </span>",
    desc: "IPK : 3.01 of 4",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2013",
    title: "Science Graduate <span>3 Senior Highschool of Lumajang </span>",
    // desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "60",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "75",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "React.js",
    percentage: "75",
  },

  {
    id: 5,
    title: "Tailwind.css",
    percentage: "75",
  },

  {
    id: 6,
    title: "Express.js",
    percentage: "80",
  },

  {
    id: 7,
    title: "MySQL",
    percentage: "85",
  },

  {
    id: 8,
    title: "MongoDB",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Attendance Log",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Attendance Log",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project / Study Project",
      },
      {
        icon: <FaCode />,
        title: "Tech : ",
        desc: "Html,CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "GitHub : ",
        desc: "https://github.com/Iyalodon/attendance",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Portofolio Web Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Portofolio Web Design",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project/ Study Project",
      },
      {
        icon: <FaCode />,
        title: "Tech : ",
        desc: "html,css",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Iyalodon/iyalodonx.github.io",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "MTIX Clone",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MTIX Clone",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project/ Study Project",
      },
      {
        icon: <FaCode />,
        title: "Tech : ",
        desc: "React.js",
      },
      {
        icon: <FiExternalLink />,
        title: "GitHub : ",
        desc: "https://github.com/Iyalodon/MTIX",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "POS_Pizza Pizazz Admin Dashboard",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "POS_Pizza Pizazz Admin Dashboard",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Team Project (Study Purpose)",
      },
      {
        icon: <FaCode />,
        title: "Tech : ",
        desc: "React.js, rechart, redux, express.js, sequelize, bcrypt, nanoid, nodemailer, multer",
      },
      {
        icon: <FiExternalLink />,
        title: "GitHub : ",
        desc: "https://github.com/Iyalodon/pizzaz-pos-app",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Multi Warehouse E-Commerce: Foothub",
    details: [
      {
        title: "Project : ",
        desc: "Multi Warehouse E-Commerce:Foothub",
      },
      {
        title: "Client : ",
        desc: "Study Final Team Project",
      },
      {
        title: "Tech : ",
        desc: "React.js, rechart, redux, express.js, sequelize, bcrypt, nanoid, nodemailer, multer, opencage, haversine",
      },
      {
        title: "GitHub : ",
        desc: "https://github.com/Iyalodon/jcwd020602-Foothub",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Corporate Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Corporate Landing Page",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Tech : ",
        desc: "vite.js, tailwind CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "GitHub : ",
        desc: "https://github.com/Iyalodon/landing-page",
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: "Flavorista Food Influencer Web Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Flavorista Food Influencer Web Page",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Tech : ",
        desc: "vite.js,tailwind CSS, express.js, mongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "GitHub : ",
        desc: "https://github.com/Iyalodon/Flavorista-Food-Blogger",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

export const hobbies = [
  {
    id: 1,
    desc: "Staying up-to-date with the latest web development trends and technologies",
  },
  {
    id: 2,
    desc: "Passion for solving coding challenges on platforms like Codewars and LeetCode",
  },
  {
    id: 3,
    desc: "Enjoying the creative process of designing UI/UX and enhancing user experience",
  },
];

export const softSkill = [
  {
    id: 1,
    desc: "Strong problem-solving skills with an eye for detail",
  },
  {
    id: 2,
    desc: "Excellent collaboration in both team-based and solo projects",
  },
  {
    id: 3,
    desc: "Fast learner and committed to continuous professional development",
  },
  {
    id: 4,
    desc: "Ability to break down complex problems and communicate solutions effectively",
  },
];
