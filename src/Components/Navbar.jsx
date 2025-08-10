import home_logo from "../images/home_logo.png";
import download_logo from "../images/download_icon.webp";
import moon_logo from "../images/moon_icon.webp";
import sun_logo from "../images/sun_icon.webp";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function handleDarkModeToggle() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", newMode);
  }
  return (
    <>
      <div ref={sentinelRef} className="absolute h-[50px] w-full"></div>
      <nav
        ref={navRef}
        className={`flex justify-between items-center z-50 px-[6%] py-5 transition-all duration-500 fixed w-full ${
          isSticky ? "bg-transparent shadow-md backdrop-blur-[20px] dark:border-b-2 border-[#333]" : "bg-none"
        }`}
      >
        <button>
          <a href="#home">
            <img src={home_logo} className="h-8 w-8" />
          </a>
        </button>

        <div className="dark:hidden absolute left-[30%]  bg-gradient-to-r from-blue-100 to-purple-100 h-[100px] w-[60%] blur-[40px] opacity-80 -z-10 "></div>
        <ul
          className={`flex items-center gap-8 font-serif  py-5 px-20 rounded-full text-gray-800 dark:text-white  ${
            isSticky
              ? "bg-none shadow-none"
              : "shadow bg-white dark:bg-transparent dark:border border-gray-400"
          }`}
        >
          <li className="">
            <a href="#about">About</a>
          </li>
          <li className="">
            <a href="#skills">Skills</a>
          </li>
          <li className="">
            <a href="#projects">Projects</a>
          </li>
          <li className="">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>

        <div className="flex gap-10 ">
          <button aria-label="Toggle dark mode" onClick={handleDarkModeToggle}>
            {darkMode ? (
              <img src={sun_logo} className="w-6" />
            ) : (
              <img src={moon_logo} className="w-6" />
            )}
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
