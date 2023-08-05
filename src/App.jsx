import { useRef } from "react";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Button from "./components/Button";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";

function App() {
  const projects = useRef(null);
  const scrollToProjects = () => {
    projects.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="splashSection">
        <h1 className="mainHeading">matti hopponen</h1>
        <div className="card">
          <Greeting />
        </div>
        <Button onClick={scrollToProjects} className="splashButton" />
      </div>
      <Projects ref={projects} />
      <About />
    </>
  );
}

export default App;
