import React from "react";

export default function Inputarea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleText}
        type="text"
        value={props.inputText}
        placeholder="Add To Do"
      />
      <button onClick={props.addItem}>Add</button>
    </div>
  );
}
