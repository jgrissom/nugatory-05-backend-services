import { useLayoutEffect, useRef } from "react";
import { ri } from "../Utils.js";

export default function Word(props) {
  const wordRef = useRef();
  useLayoutEffect(() => {
    const el = wordRef.current;
    el.style.top = ri(0, window.innerHeight - el.offsetHeight) + "px";
    el.style.left = ri(0, window.innerWidth - el.offsetWidth) + "px";
  }, []);

  return (
    <div
      ref={wordRef}
      className="word"
      style={{
        textShadow: `0 0 .25rem ${props.word.color}`,
      }}
      onClick={() => props.onDelete(props.word.id)}
    >
      {props.word.text}
    </div>
  );
}
