import { useState } from "react";
import "./NewWord.css";
import trigger from "../assets/trigger.svg";

export default function NewWord() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  return (
    <>
      <form>
        <div id="overlay"></div>
        <div id="dialog">
          <header>nugatory</header>
          <div className="color">
            <div
              className="color-square"
              style={{ background: `rgb(${red}, 0, 0)` }}
            ></div>
            <input
              id="red"
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(e.target.value)}
            />
            <div className="value">{red}</div>
          </div>
          <div className="color">
            <div
              className="color-square"
              style={{ background: `rgb(0, ${green}, 0)` }}
            ></div>
            <input
              id="green"
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(e.target.value)}
            />
            <div className="value">{green}</div>
          </div>
          <div className="color">
            <div
              className="color-square"
              style={{ background: `rgb(0, 0, ${blue})` }}
            ></div>
            <input
              id="blue"
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(e.target.value)}
            />
            <div className="value">{blue}</div>
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
