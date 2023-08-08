import { useScrollToSection } from "./hooks/useScrollToSection";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Button from "./components/Button";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";

function App() {
  const [projectsRef, scrollToProjects] = useScrollToSection();
  const [aboutRef, scrollToAbout] = useScrollToSection();

  return (
    <>
      <Header
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
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
    </>
  );
}

export default App;
