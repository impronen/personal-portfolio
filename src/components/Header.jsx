import { ReactComponent as Logo } from "iconoir/icons/profile-circle.svg";

export default function Header({ scrollToProjects, scrollToAbout }) {
  return (
    <header>
      <div className="logoContainer">
        <Logo />
        <p className="name">matti</p>
      </div>

      <nav className="navigation">
        <ul className="menuList">
          <li>home</li>
          <li onClick={scrollToProjects}>projects</li>
          <li onClick={scrollToAbout}>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
