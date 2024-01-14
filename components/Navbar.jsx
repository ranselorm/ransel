"use client";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

const navlinks = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "About Me",
    id: "about",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Portfolio",
    id: "portfolio",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black font-primary text-[16.5px] font-medium px-4 lg:px-[150px] shadow-lg">
      <div className="py-[20px] w-full flex justify-between items-center">
        <div>
          <h3>Ransel</h3>
        </div>
        <div className="lg:flex gap-x-10 hidden">
          {navlinks.map((link, index) => (
            <Link
              to={link.id}
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
              key={index}
              className={`hover:text-secondary transition-all cursor-pointer ${
                pathname === link.path ? "text-secondary underline" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <button className="bg-primary px-3 py-2 rounded text-white text-[16px] font-main">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
