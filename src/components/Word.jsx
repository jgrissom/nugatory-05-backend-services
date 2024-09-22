import { useState } from "react";

function Word() {
  const [text, setText] = useState("banana");
  const [color, setColor] = useState("yellow");

  function handleClick() {
    console.log(text);
    color = "#000";
  }

  return (
    <div
      className="word"
      style={{ textShadow: `0 0 .25rem ${color}` }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export default Word;
