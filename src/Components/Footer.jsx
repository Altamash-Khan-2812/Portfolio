import github_icon from "../images/github_icon.webp";
import github_icon_dark from "../images/github_icon_dark.webp";
import linkedin_icon from "../images/linkedin_icon.webp";

const Footer = () => {
  return (
    <footer className="text-center mb-10">
      <ul className="flex justify-center items-center gap-10">
        <li>
          <a href="https://github.com/Altamash-Khan-2812" target="_blank">
            <img src={github_icon} className="dark:hidden" />
            <img src={github_icon_dark} className="hidden dark:block" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={linkedin_icon} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
