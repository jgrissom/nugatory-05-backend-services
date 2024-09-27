export default function Word(props) {
  return (
    <div
      className="word"
      style={{ textShadow: `0 0 .25rem ${props.color}` }}
      onClick={props.onDelete}
    >
      {props.text}
    </div>
  );
}
