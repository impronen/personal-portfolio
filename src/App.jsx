import { useState } from "react";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  return (
    <>
      <h1>Antero&apos;s Portfolio</h1>
      <div className="card">
        <Greeting />
      </div>
    </>
  );
}

export default App;
