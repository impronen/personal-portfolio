import Greeting from "./components/Greeting";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1>Antero&apos;s Portfolio</h1>
      <div className="card">
        <Greeting />
      </div>
    </>
  );
}

export default App;
