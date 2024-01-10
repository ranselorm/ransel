import { AiFillApi } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiSeoFill } from "react-icons/ri";

export const projects = [
  {
    id: "1",
    name: "Netflix",
    img: "/web2.jpg",
    type: "Web application",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
  },
  {
    id: "2",
    name: "54Shaydes",
    img: "/test.png",
    type: "Web application",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
  },
  {
    id: "3",
    name: "Vine",
    img: "/web3.jpg",
    type: "Landing page",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
  },
  {
    id: "4",
    name: "Portfolio",
    img: "/web4.jpg",
    type: "Website",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velit id qui voluptatibus. Iure accusamus rerum adipisci ullam beatae magnam voluptas nemo. Quam vel, animi consequatur error odit natus labore commodi?",
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
