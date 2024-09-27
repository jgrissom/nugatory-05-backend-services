import { ri } from "../Utils.js";

export default function Word(props) {
  return (
    <div
      className="word"
      style={{
        textShadow: `0 0 .25rem ${props.word.color}`,
        top: `${ri(0, window.innerHeight)}px`,
        left: `${ri(0, window.innerWidth)}px`,
      }}
      onClick={() => props.onDelete(props.word.id)}
    >
      {props.word.text}
    </div>
  );
}
