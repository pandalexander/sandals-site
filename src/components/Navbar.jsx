import Logo from "../assets/sandals-logo.png";
import { Menu, X } from "lucide-react";
import { SendHorizontal } from "lucide-react";
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
            <ul className="hidden font-main lg:flex ml-14 space-x-12 text-white hover:cursor-default">
              <li className="hover:text-accentMuted hover:cursor-pointer">
                Services
              </li>
              <li className="hover:text-accentMuted hover:cursor-pointer">
                About
              </li>
              <li className="hover:text-accentMuted hover:cursor-pointer">
                Contact
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href=""
                className="py-2 px-4 border-0 rounded-full bg-gradient-to-br from-white to-accentLight text-primaryMain font-bold hover:translate-x-1 transition-all duration-300"
              >
                <div className="flex space-x-2 items-center justify-center">
                  <SendHorizontal size={18} className="text-primaryMain" />
                  <p>Get in touch</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="fixed w-full right-0 z-20">
          <div className="bg-primaryMain rounded-b-2xl lg:hidden mx-3 shadow-lg md:grid md:grid-cols-2 flex flex-col gap-5 justify-center p-4 font-semibold">
            <div
              onClick={handleMenuClick}
              to="services"
              offset={-70}
              className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-primaryMain hover:cursor-pointer"
            >
              Services
            </div>
            <div
              onClick={handleMenuClick}
              to="about"
              className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-primaryMain hover:cursor-pointer"
            >
              About
            </div>
            <div
              onClick={handleMenuClick}
              to="about"
              className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-primaryMain hover:cursor-pointer"
            >
              Contact
            </div>
            <a
              href=""
              className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-primaryMain hover:cursor-pointer"
            >
              <div className="flex space-x-2 items-center justify-center">
                <SendHorizontal size={18} className="text-primaryMain" />
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
