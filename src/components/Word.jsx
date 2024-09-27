export default function Word(props) {
  function handleClick() {
    // when a component's state is altered, it is re-rendered asynchronously by react
    // setColor("#000");
  }

  console.log(props);
  return (
    <div
      className="word"
      style={{ textShadow: `0 0 .25rem ${props.color}` }}
      onClick={handleClick}
    >
      {props.text}
    </div>
  );
}
