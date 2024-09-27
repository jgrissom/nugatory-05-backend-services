export default function Counter(props) {
  return (
    <div className="counter">
      {props.totalWords > 0 ? `words: ${props.totalWords}` : "no words"}
    </div>
  );
}
