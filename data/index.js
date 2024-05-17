import { AiFillApi } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiSeoFill } from "react-icons/ri";

export const projects = [
  {
    id: "1",
    name: "Elite Ryde",
    img: "/elite2.png",
    type: "Landing Page",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
    url: "https://elite-landing-page.vercel.app/",
    stack: ["Next.js, React.js, Tailwind, Node.js"],
  },

  {
    id: "2",
    name: "Adwenekoro",
    img: "/test.png",
    type: "Landing Page",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
    url: "https://orange-sky-049f07003-dev.westeurope.2.azurestaticapps.net/",
    stack: ["Next.js, React.js, Tailwind, Node.js"],
  },
  {
    id: "3",
    name: "Ecommerce",
    img: "/shop2.png",
    type: "Landing page",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
    url: "https://ecommerce-tan-zeta-52.vercel.app",
    stack: ["Next.js, React.js, Tailwind, Node.js"],
  },
  {
    id: "4",
    name: "Portfolio",
    img: "/sel.png",
    type: "Website",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
    url: "https://ransel.vercel.app/",
    stack: ["Next.js, React.js, Tailwind, Node.js"],
  },
];

export const services = [
  {
    title: "Web Applications",
    desc: "Creating responsive, dynamic web apps using MongoDB, Express.js, React.js, and Node.js.",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "Landing Pages",
    desc: "Developing high-converting and responsive landing pages with a focus on user engagement.",
    icon: <CgWebsite />,
  },
  {
    title: "API Integration",
    desc: "Building and connecting RESTful APIs for seamless data exchange and functionality.",
    icon: <AiFillApi />,
  },
  {
    title: "SEO Practices",
    desc: " Enhancing website visibility using search engine optimization techniques for better ranking.",
    icon: <RiSeoFill />,
  },
];
