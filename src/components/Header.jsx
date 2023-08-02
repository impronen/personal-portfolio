import { ReactComponent as Logo } from "iconoir/icons/profile-circle.svg";

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <Logo />
        <p className="name">matti</p>
      </div>

      <nav className="navigation">
        <ul className="menuList">
          <li>home</li>
          <li>projects</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
