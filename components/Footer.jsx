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
    <footer className="bg-black h-[60vh] pt-[130px] px-4 md:px-[150px]">
      <Contact />
      <div className="flex flex-wrap justify-between items-start">
        {/* Column 1 */}
        <div className="w-full md:flex-1 mb-6">
          <h5 className="text-xl font-bold mb-4 uppercase">
            Vine living waters Ministries
          </h5>
          <p className="text-gray-400 mb-4">
            Join us in breaking the barriers of poverty through education and in
            supporting the journey of resilience and independence for widows.
            Together, we can create a world where everyone has the opportunity
            to thrive.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            DONATE NOW
          </button>
        </div>
        {/* Column 2 */}
        <div className="w-full md:flex-1 flex md:justify-center mb-6">
          <div>
            <h5 className="text-xl font-bold mb-4">POPULAR LINKS</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-300">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-300">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 5 */}
        <div className="w-full md:flex-1 mb-6 flex md:justify-center">
          <div>
            <h5 className="text-xl font-bold mb-4">SOCIAL</h5>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 flex items-center"
                >
                  <FaFacebookF className="mr-2" /> Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 flex items-center"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 flex items-center"
                >
                  <FaLinkedinIn className="mr-2" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
