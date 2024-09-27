export default function Counter(props) {
  return (
    props.totalWords > 0 && (
      <div className="counter">words: {props.totalWords}</div>
    )
  );
}
