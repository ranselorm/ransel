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
        <div className="h-[50px] w-[120px]">
          <img src="/ran.png" alt="" className="h-full w-full object-cover" />
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
          <button className="bg-none border-2 border-black px-3 py-2 rounded text-black text-[16px] font-main">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
