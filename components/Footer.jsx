import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-4 md:px-[150px] px-4 font-main py-10">
      <div className="flex justify-between flex-col md:flex-row flex-wrap items-start gap-y-8">
        <div className="flex-1 flex flex-col items-start">
          <div className="h-[50px] w-[120px]">
            <img src="/ran.png" alt="" className="h-full w-full object-cover" />
          </div>
          <p className="text-sm mb-4">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div>
            <div className="flex items-center mb-2 gap-2">
              <div className="w-[2px] h-[20px] bg-primary" />
              <h3 className="text-lg font-semibold">Links</h3>
            </div>
            <ul className="text-sm space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2 gap-2">
            <div className="w-[2px] h-[20px] bg-primary" />
            <h3 className="text-lg font-semibold">Contact</h3>
          </div>
          <div className="text-sm space-y-1 mb-4">
            <p className="flex items-center gap-x-2">
              <IoPhonePortraitOutline />
              +233550013021
            </p>
            <p className="flex items-center gap-x-2">
              <MdEmail />
              selormdevs@gmail.com
            </p>
          </div>
          <div className="flex gap-x-4 text-lg">
            <FaLinkedinIn />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-8">
        &copy; {new Date().getFullYear()} ranselorm. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
