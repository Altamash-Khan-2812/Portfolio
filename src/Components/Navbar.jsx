import home_logo from "../images/home_logo.png";
import download_logo from "../images/download_icon.webp";
import moon_logo from "../images/moon_icon.webp";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, []);
  return (
    <>
      <div ref={sentinelRef} className="absolute h-[50px] w-full"></div>
      <nav
        ref={navRef}
        className={`flex justify-between items-center z-50 px-[6%] py-5 transition-all duration-500 fixed w-full ${
          isSticky ? "bg-transparent shadow-md backdrop-blur-[20px]" : "bg-none"
        }`}
      >
        <button >
          <a href="#home"><img src={home_logo} className="h-8 w-8" /></a>
        </button>

        <div className="absolute left-[30%]  bg-gradient-to-r from-blue-100 to-purple-100 h-[100px] w-[60%] blur-[40px] opacity-80 -z-10 "></div>
        <ul
          className={`flex items-center gap-8 font-serif  py-5 px-20 rounded-full  ${
            isSticky ? "bg-none shadow-none" : "shadow bg-white"
          }`}
        >
          <li className="text-gray-700">
            <a href="#about">About</a>
          </li>
          <li className="text-gray-700">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-gray-700">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-gray-700">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>

        <div className="flex gap-10 ">
          <button aria-label="Toggle dark mode">
            <img src={moon_logo} className="w-6" />
          </button>
          <a
            href="#"
            download
            aria-label="Download resume"
            className="flex items-center gap-3 border-1 border-gray-800 rounded-full px-10 py-4 bg-white "
          >
            Resume <img src={download_logo} className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
