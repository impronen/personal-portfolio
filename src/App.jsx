import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1 className="mainHeading">matti hopponen</h1>
      <div className="card">
        <Greeting />
      </div>
      <Button />
    </>
  );
}

export default App;
