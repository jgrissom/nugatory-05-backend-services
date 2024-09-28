import axios from "axios";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import NewWord from "./components/NewWord";
import Word from "./components/Word";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);
  const apiEndpoint = "https://nugatoryapi.azurewebsites.net/api/word";

  function handleDelete(wordId) {
    console.log(`delete word: ${wordId}`);
    // setWords(words.filter((w) => w.id !== wordId));
  }
  function handleAdd(text, r, g, b) {
    console.log(`add ${text}`);
    // const id =
    //   words.length === 0 ? 1 : Math.max(...words.map((word) => word.id)) + 1;
    // setWords(words.concat({ id: id, text: text, r: r, g: g, b: b }));
  }
  useEffect(() => {
    // initial data loaded here
    async function fetchData() {
      const { data: fetchedWords } = await axios.get(apiEndpoint);
      setWords(fetchedWords);
    }
    fetchData();
  }, []);

  return (
    <div>
      <header className="app-header">nugatory</header>
      {words.map((word) => (
        <Word key={word.id} word={word} onDelete={handleDelete} />
      ))}
      <Counter totalWords={words.length} />
      <NewWord onAdd={handleAdd} />
    </div>
  );
}
export default App;
