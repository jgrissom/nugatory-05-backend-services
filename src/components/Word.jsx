export default function Word(props) {
  return (
    <div
      className="word"
      style={{ textShadow: `0 0 .25rem ${props.word.color}` }}
      onClick={() => props.onDelete(props.word.id)}
    >
      {props.word.text}
    </div>
  );
}
