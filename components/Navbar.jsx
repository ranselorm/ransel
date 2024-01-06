// import { useActiveLink } from "next/navigation";
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Button from "./ui/Button";

const navlinks = [
  {
    title: "Home",
    path: "/",
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
    title: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-transparent text-black font-primary text-[16.5px] font-medium">
      <div className="py-[30px] w-full flex justify-between items-center">
        <div>
          <h3>Ransel</h3>
        </div>
        <div className="lg:flex gap-x-10 hidden">
          {navlinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`hover:text-secondary transition-all ${
                pathname === link.path ? "text-secondary underline" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <Button text="Let's Talk" icon={<BsArrowRight />} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
