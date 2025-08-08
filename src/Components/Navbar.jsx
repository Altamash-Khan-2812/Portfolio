import home_logo from "../images/home_logo.png";
import download_logo from "../images/download_icon.webp";
import moon_logo from "../images/moon_icon.webp";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[6%] py-5 sticky">
      <img src={home_logo} className="h-8 w-8" />

    <div className="absolute left-[30%]  bg-gradient-to-r from-blue-100 to-purple-100 h-[100px] w-[60%] blur-[40px] opacity-80 -z-10 "></div>
      <ul className="flex items-center gap-8 font-serif shadow py-5 px-20 rounded-full bg-white">
        <li className="text-gray-700"><a href="#">About</a></li>
        <li className="text-gray-700"><a href="#">Skills</a></li>
        <li className="text-gray-700"><a href="#">Projects</a></li>
        <li className="text-gray-700"><a href="#">Contacts</a></li>
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
  );
};

export default Navbar;
