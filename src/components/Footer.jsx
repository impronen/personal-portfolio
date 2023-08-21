import { ReactComponent as CurveLine } from "../assets/CurveLine.svg";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <CurveLine className="background-image2" alt="Background" />
      <div className="leftFooter">
        <p className="footerText">made by matti 2023</p>
      </div>
    </footer>
  );
}
