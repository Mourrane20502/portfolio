import digitech from "../images/digitech.jpg";
import drillShop from "../images/drillshop.jpg";
import initcom from "../images/initcom.jpg";
import initcomplv from "../images/initcomplv.jpg";
import pricingCard from "../images/pricingCard.jpg";

export const MyPersonnalData = {
  name: "Mohamed Mourrane",
  age: 22,
  title: "Full Stack Developer",
  description:
    "I am a full stack developer with a passion for creating web applications. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills.",
  available: true,
};

export const MyProjects = [
  {
    id: 1,
    name: "DrillShop",
    description:
      "**DrillShop** is an e-commerce platform that allows users to buy special outfits from a moroccan store. It features a user-friendly interface, secure payment processing, and a wide range of products.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: drillShop,
    githubRepository: "https://github.com/Mourrane20502/drilllshop",
    liveDemo: "https://www.drillshop.ma/",
  },
  {
    id: 2,
    name: "InitCom",
    description:
      "I created a website for **INITCOM**, a communication agency specializing in event marketing, brand design, and more. The site highlights their 360-degree services with a sleek, user-friendly design to showcase their creative expertise.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    image: initcom,
    githubRepository: "https://github.com/Mourrane20502/initcom",
    liveDemo: "https://www.initcom.ma/",
  },
  {
    id: 3,
    name: "InitCom PlV",
    description:
      "I created a website for **INITCOM PlV**, an e-commerce platform for selling the agency's products. The site features a clean, intuitive design, allowing users to easily browse and purchase various marketing products offered by INITCOM, while providing a seamless shopping experience.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    image: initcomplv,
    githubRepository: "https://github.com/Mourrane20502/initcom",
    liveDemo: "https://initcomplv.ma/",
  },
  {
    id: 4,
    name: "Digitech Solutions",
    description:
      "I created a website for **Digitech Solutions**, a digital marketing agency. The site showcases their comprehensive marketing services, with a focus on creative and strategic digital solutions. It features a modern, responsive design to enhance user engagement and provide potential clients with easy access to their services.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: digitech,
    githubRepository: "https://github.com/Mourrane20502/digitech_agency",
    liveDemo: "https://digitechsolutions25.netlify.app/",
  },
  {
    id: 5,
    name: "Pricing Card",
    description:
      "This is a simple pricing card component built with NextJs and Tailwind CSS. It showcases different pricing plans with features and a call-to-action button.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    image: pricingCard,
    githubRepository: "https://github.com/Mourrane20502/pricingcard",
    liveDemo: "https://pricingcard-rose.vercel.app/",
  },
  {
    id: 5,
    name: "Crud App of users",
    description:
      "This is a simple CRUD application built with React and Tailwind CSS And Express Js MongoDb. It allows users to create, read, update, and delete user information.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "Express",
      "MongoDB",
    ],
    image: pricingCard,
    githubRepository: "https://github.com/Mourrane20502/pricingcard",
    liveDemo: "https://pricingcard-rose.vercel.app/",
  },
];
