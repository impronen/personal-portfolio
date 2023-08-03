import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Button from "./components/Button";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="splashSection">
        <h1 className="mainHeading">matti hopponen</h1>
        <div className="card">
          <Greeting />
        </div>
        <Button className="splashButton" />
      </div>
      <Projects />
    </>
  );
}

export default App;
