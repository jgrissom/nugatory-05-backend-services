import { useState } from "react";
import Counter from "./components/Counter";
import NewWord from "./components/NewWord";
import Word from "./components/Word";
import "./App.css";

function App() {
  const [words, setWords] = useState([
    { id: 1, text: "banana", r: 255, g: 255, b: 0 },
    { id: 2, text: "apple", r: 255, g: 26, b: 0 },
    { id: 3, text: "lime", r: 0, g: 255, b: 0 },
    { id: 4, text: "orange", r: 255, g: 165, b: 0 },
    { id: 5, text: "pear", r: 154, g: 205, b: 50 },
    { id: 6, text: "blueberry", r: 0, g: 153, b: 255 },
  ]);

  function handleDelete(wordId) {
    console.log(`delete word: ${wordId}`);
    setWords(words.filter((w) => w.id !== wordId));
  }

  return (
    <div>
      <header className="app-header">nugatory</header>
      {words.map((word) => (
        <Word key={word.id} word={word} onDelete={handleDelete} />
      ))}
      <Counter totalWords={words.length} />
      <NewWord />
    </div>
  );
}
export default App;
