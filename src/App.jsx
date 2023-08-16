import { useScrollToSection } from "./hooks/useScrollToSection";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Button from "./components/Button";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./style/App.css";
import "./style/svg.css";

function App() {
  const [projectsRef, scrollToProjects] = useScrollToSection();
  const [aboutRef, scrollToAbout] = useScrollToSection();
  const [contactRef, scrollToContact] = useScrollToSection();

  return (
    <>
      <Header
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
      />
      <div className="splashSection">
        <h1 className="mainHeading">matti hopponen</h1>
        <div className="card">
          <Greeting />
        </div>
        <Button
          text="projects"
          onClick={scrollToProjects}
          className="splashButton"
        />
      </div>
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
