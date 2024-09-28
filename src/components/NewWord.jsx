import "./NewWord.css";
import trigger from "../assets/trigger.svg";

export default function NewWord() {
  return (
    <>
      <form>
        <div id="overlay"></div>
        <div id="dialog">
          <header>nugatory</header>
          <div className="color">
            <div
              className="color-square"
              style={{ background: "rgb(255, 0, 0)" }}
            ></div>
            <input id="red" type="range" min="0" max="255" value="255" />
            <div className="value">255</div>
          </div>
          <div className="color">
            <div
              className="color-square"
              style={{ background: "rgb(0, 255, 0)" }}
            ></div>
            <input id="green" type="range" min="0" max="255" value="255" />
            <div className="value">255</div>
          </div>
          <div className="color">
            <div
              className="color-square"
              style={{ background: "rgb(0, 0, 255)" }}
            ></div>
            <input id="blue" type="range" min="0" max="255" value="255" />
            <div className="value">255</div>
          </div>
          <div>
            <input id="text" type="text" placeholder="new word" />
          </div>
          <div>
            <button disabled id="save">
              save
            </button>
          </div>
          <div>
            <button id="cancel">cancel</button>
          </div>
        </div>
      </form>
      <img src={trigger} alt="New Word" id="trigger" />
    </>
  );
}
