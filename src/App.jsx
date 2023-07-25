import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function Greeting() {
    return (
      <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
    );
  }

  return (
    <>
      <div></div>
      <h1>Antero&apos;s Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>This is for me to show what I can do.</p>
        <Greeting />
      </div>
    </>
  );
}

export default App;
