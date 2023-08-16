import { ReactComponent as Logo } from "iconoir/icons/profile-circle.svg";
import { ReactComponent as CurveLine } from "../assets/CurveLine.svg";

export default function Header({
  scrollToProjects,
  scrollToAbout,
  scrollToContact,
}) {
  return (
    <header className="header-container">
      <CurveLine className="background-image" alt="Background" />
      <div className="logoContainer">
        <Logo />
        <p className="name">matti</p>
      </div>

      <nav className="navigation">
        <ul className="menuList">
          <li>home</li>
          <li onClick={scrollToProjects}>projects</li>
          <li onClick={scrollToAbout}>about</li>
          <li onClick={scrollToContact}>contact</li>
        </ul>
      </nav>
    </header>
  );
}
