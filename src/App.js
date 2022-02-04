import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setinputTest] = useState("");
  const [items, setItems] = useState([]);

  function handleText(event) {
    const text = event.target.value;
    setinputTest(text);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setinputTest("");
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
      <button onClick={addItem}>Add</button>
      <ol>
        {items.map((todos) => {
          return <li>{todos}</li>;
        })}
      </ol>
    </div>
  );
}
