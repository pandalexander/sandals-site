import Logo from "../assets/sandals-logo.png";
import { Menu, X } from "lucide-react";
import { Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

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

  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-body",
        { x: 0, yPercent: -100, autoAlpha: 1 },
        {
          x: 0,
          yPercent: 0,
          rotation: 0,
          delay: 1,
          duration: 1.5,
          autoAlpha: 1,
          ease: "sine.out",
          force3D: true,
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="sticky top-0 z-50">
      <nav
        className={`nav-body py-3 bg-primaryMain  font-semibold lg:rounded-b-2xl mx-3 ${
          menuIsOpen ? "" : "shadow-lg rounded-b-2xl "
        }`}
      >
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center ">
            <div
              onClick={handleTitleClick}
              className="flex items-center flex-shrink-0 hover:cursor-pointer "
            >
              <Link to="home" smooth={true} duration={900} offset={-80}>
                <img src={Logo} alt="" className="h-14 mr-2" />
              </Link>
            </div>

            <div className="lg:hidden flex text-white">
              {menuIsOpen ? (
                <X onClick={handleMenuClick} />
              ) : (
                <Menu onClick={handleMenuClick} />
              )}
            </div>
            <ul className="hidden text-sm font-main lg:flex ml-14 space-x-12 text-baseLight hover:cursor-default">
              <Link to="about" smooth={true} duration={900} offset={-40}>
                <li className="hover:text-accentMuted hover:cursor-pointer transition-all duration-300 ease-in-out">
                  About
                </li>
              </Link>
              <Link to="services" smooth={true} duration={900} offset={-60}>
                <li className="hover:text-accentMuted hover:cursor-pointer transition-all duration-300 ease-in-out">
                  Services
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={900} offset={-300}>
                <div>
                  <li className="hover:text-accentMuted hover:cursor-pointer transition-all duration-300 ease-in-out">
                    Contact
                  </li>
                </div>
              </Link>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="mailto:info@sandalsdisciple.com"
                className="py-2 px-4 border-0 rounded-full bg-gradient-to-br from-white to-accentLight text-primaryDark font-bold hover:translate-x-1 transition-all duration-300"
              >
                <div className="flex space-x-2 items-center justify-center">
                  <p>Get in touch</p>
                  <Send size={18} className="text-primaryMain" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="fixed w-full right-0 z-20">
          <div className="bg-primaryMain rounded-b-2xl lg:hidden mx-3 shadow-lg md:grid md:grid-cols-2 flex flex-col gap-3 justify-center p-4 text-base font-main">
            <Link to="about" smooth={true} duration={900} offset={-40}>
              <div
                onClick={handleMenuClick}
                className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                About
              </div>
            </Link>
            <Link to="services" smooth={true} duration={900} offset={-60}>
              <div
                onClick={handleMenuClick}
                className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                Services
              </div>
            </Link>
            <Link to="contact" smooth={true} duration={900} offset={-40}>
              <div
                onClick={handleMenuClick}
                className="border-2 border-baseLight hover:bg-primaryMain text-baseLight text-lg py-2 px-3 text-center rounded-full  bg-accentLight/10 hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                Contact
              </div>
            </Link>
            <a
              href="mailto:info@sandalsdisciple.com"
              className="border-2 border-baseLight hover:bg-white text-primaryMain text-lg py-2 px-3 text-center rounded-full  bg-baseLight hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
              <div className="flex space-x-2 items-center justify-center">
                <p>Get in touch</p>
                <Send size={18} className="text-primaryMain" />
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
