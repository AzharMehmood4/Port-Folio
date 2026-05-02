import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const year = new Date().getFullYear();

  const iconStyle =
    "transition-all duration-300 transform hover:scale-125 hover:text-green-500 cursor-pointer";

  return (
    <>
      <hr />
      <footer data-aos="zoom-in" className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">

            {/* Social Icons */}
            <div className="flex space-x-6 text-gray-600">
              <a href="https://www.facebook.com/Azharmahmood649" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                <FaFacebook size={24} />
              </a>

              <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                <FaXTwitter size={24} />
              </a>

              <a href="https://www.linkedin.com/in/azharmehmod" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                <FaLinkedin size={24} />
              </a>

              <a href="https://wa.me/923051196565" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                <FaWhatsapp size={24} />
              </a>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-gray-500">
                &copy; {year} Your Company. All rights reserved.
              </p>
              <p className="text-gray-400">
                Developed by <span className="text-red-700 font-medium">Azhar</span>
              </p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
