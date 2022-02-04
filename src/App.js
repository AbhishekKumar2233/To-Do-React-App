import { useState } from "react";
import Inputarea from "./components/Inputarea";
import Items from "./components/Items";
import "./styles.css";

export default function App() {
  const [inputText, setinputText] = useState("");
  const [items, setItems] = useState([]);

  function handleText(event) {
    const text = event.target.value;
    setinputText(text);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setinputText("");
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
      {/* <input
        onChange={handleText}
        type="text"
        value={inputText}
        placeholder="Add To Do"
      />
      <button onClick={addItem}>Add</button> */}
      <Inputarea
        handleText={handleText}
        inputText={inputText}
        addItem={addItem}
      />

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
