import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
const navlinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-transparent font-primary text-[16px]">
      <div className="px-[100px] py-[30px] w-full flex justify-between items-center">
        <div>
          <h3>Ransel</h3>
        </div>
        <div className="flex gap-x-6">
          {navlinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="hover:text-secondary transition-all"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-6">
          <p className="text-[25px] cursor-pointer text-secondary  hover:text-primary transition-all">
            <AiOutlineGithub />
          </p>
          <p className="text-[25px] cursor-pointer text-secondary  hover:text-primary transition-all">
            <AiOutlineLinkedin />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
