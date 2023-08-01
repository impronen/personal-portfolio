import { ReactComponent as Logo } from "iconoir/icons/profile-circle.svg";

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <Logo />
      </div>

      <nav className="navigation">
        <ul>
          <li>home</li>
          <li>projects</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
