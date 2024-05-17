"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the mobile menu

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black font-primary text-[16.5px] font-medium px-4 lg:px-[150px] shadow-lg">
      <div className="py-[10px] w-full flex justify-between items-center">
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
              <p className="text-base">{link.title}</p>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <button className="bg-none border-2 border-black px-3 py-1 rounded text-black text-[16px] font-main">
            Contact Me
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-lg absolute top-full left-0 w-full py-4">
          {navlinks.map((link, index) => (
            <Link
              to={link.id}
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
              key={index}
              onClick={toggleMobileMenu}
              className={`hover:text-secondary transition-all cursor-pointer py-2 ${
                pathname === link.path ? "text-secondary underline" : ""
              }`}
            >
              <p className="text-base">{link.title}</p>
            </Link>
          ))}
          <button className="bg-none border-2 border-black px-3 py-1 rounded text-black text-[16px] font-main mt-2">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
