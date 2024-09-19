import { useState } from "react";

function Word() {
  const [text, setText] = useState("banana");
  const [color, setColor] = useState("yellow");
  return (
    <div
      style={{
        color: "var(--main-color)",
        width: "fit-content",
        fontSize: "3.5rem",
        textShadow: `0px 0px 4px ${color}`,
      }}
    >
      {text}
    </div>
  );
}

export default Word;
