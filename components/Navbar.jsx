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
  return (
    <nav className="bg-transparent text-black font-primary text-[16.5px] font-medium">
      <div className="px-[100px] py-[30px] w-full flex justify-between items-center">
        <div>
          <h3>Ransel</h3>
        </div>
        <div className="flex gap-x-10">
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
        <Button text="Let's Talk" icon={<BsArrowRight />} />
      </div>
    </nav>
  );
};

export default Navbar;
