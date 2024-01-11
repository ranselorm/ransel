import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="bg-black h-[40vh] pt-[130px] px-4 md:px-[150px]">
      <div className="mb-[100px]">
        <Contact />
      </div>
      <div className="flex items-center justify-between">
        <h2>logo</h2>
        <div className="flex gap-4">
          <p>link</p>
          <p>link</p>
          <p>link</p>
          <p>link</p>
        </div>
        <p>socials</p>
      </div>
    </footer>
  );
};

export default Footer;
