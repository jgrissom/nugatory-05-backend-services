import { useState } from "react";

function Word() {
  const [text, setText] = useState("banana");
  const [color, setColor] = useState("yellow");
  return (
    <div className="word" style={{ textShadow: `0 0 .25rem ${color}` }}>
      {text}
    </div>
  );
}

export default Word;
