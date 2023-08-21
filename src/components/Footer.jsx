import { ReactComponent as CurveLine } from "../assets/CurveLine.svg";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <CurveLine className="background-image2" alt="Background" />
      <div className="leftFooter">
        <h2 className="name">matti hopponen</h2>
        <p className="footerText">
          self taught programmer with an unique perspective on customer
          relations
        </p>
      </div>
    </footer>
  );
}
