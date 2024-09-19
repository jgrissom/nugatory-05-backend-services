import { useState } from "react";

function Word() {
  const [text, setText] = useState("banana");
  return <div>{text}</div>;
}

export default Word;
