import github_icon from "../images/github_icon.webp";
import linkedin_icon from "../images/linkedin_icon.webp";

const Footer = () => {
  return (
    <footer className="text-center mb-10">
      <ul className="flex justify-center gap-10">
        <li><a href="https://github.com/Altamash-Khan-2812" target="_blank"><img src={github_icon} /></a></li>
        <li><a href="#"><img src={linkedin_icon} /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
