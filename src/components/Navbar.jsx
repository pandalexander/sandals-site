import Logo from "../assets/sandals-logo.png";
import { Menu, X } from "lucide-react";
import { Send } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleTitleClick = () => {
    if (menuIsOpen) {
      setMenuIsOpen(!menuIsOpen);
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 py-3 bg-primaryMain  font-semibold lg:rounded-b-2xl mx-3 ${
          menuIsOpen ? "" : "shadow-lg rounded-b-2xl "
        }`}
      >
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center ">
            <div
              onClick={handleTitleClick}
              to="home"
              offset={-70}
              className="flex items-center flex-shrink-0 hover:cursor-pointer"
            >
              <img src={Logo} alt="" className="h-14 mr-2" />
              {/* <h1 className="text-2xl tracking-tight text-white">
                BTS&nbsp;Consulting
              </h1> */}
            </div>

            <div className="lg:hidden flex text-white">
              {menuIsOpen ? (
                <X onClick={handleMenuClick} />
              ) : (
                <Menu onClick={handleMenuClick} />
              )}
            </div>
            <ul className="hidden text-base font-accent lg:flex ml-14 space-x-12 text-baseLight hover:cursor-default">
              <li></li>
              <li className="hover:text-accentMuted hover:cursor-pointer transition-all duration-300 ease-in-out">
                Services
              </li>
              <li className="hover:text-accentMuted hover:cursor-pointer transition-all duration-300 ease-in-out">
                About
              </li>
              <li className="hover:text-accentMuted hover:cursor-pointer transition-all duration-300 ease-in-out">
                Contact
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href=""
                className="py-2 px-4 border-0 rounded-full bg-gradient-to-br from-white to-accentLight text-primaryDark font-bold hover:translate-x-1 transition-all duration-300"
              >
                <div className="flex space-x-2 items-center justify-center">
                  <Send size={18} className="text-primaryMain" />
                  <p>Get in touch</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="fixed w-full right-0 z-20">
          <div className="bg-primaryMain rounded-b-2xl lg:hidden mx-3 shadow-lg md:grid md:grid-cols-2 flex flex-col gap-3 justify-center p-4 text-base font-accent">
            <div
              onClick={handleMenuClick}
              to="services"
              offset={-70}
              className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
              Services
            </div>
            <div
              onClick={handleMenuClick}
              to="about"
              className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
              About
            </div>
            <div
              onClick={handleMenuClick}
              to="about"
              className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
              Contact
            </div>
            <a className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out">
              <div className="flex space-x-2 items-center justify-center">
                <Send size={18} className="text-baseLight" />
                <p>Get in touch</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
