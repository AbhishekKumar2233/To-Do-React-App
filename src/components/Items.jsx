import React, { useState } from "react";

export default function Items(props) {
  const [text, setText] = useState(false);

  function handleClick() {
    setText((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: text ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
