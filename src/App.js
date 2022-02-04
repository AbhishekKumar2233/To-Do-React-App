import { useState } from "react";
import Items from "./components/Items";
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

  function deleteItem(id) {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
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
        {items.map((todos, index) => {
          return (
            <Items key={index} id={index} text={todos} onChecked={deleteItem} />
          );
        })}
      </ol>
    </div>
  );
}
