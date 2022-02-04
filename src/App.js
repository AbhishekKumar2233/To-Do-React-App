import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setinputTest] = useState("");

  function handleText(event) {
    const text = event.target.value;
    setinputTest(text);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        onChange={handleText}
        type="text"
        value={inputText}
        placeholder="Add To Do"
      />
      <button>Add</button>
      <ol>
        <li>{inputText}</li>
      </ol>
    </div>
  );
}
