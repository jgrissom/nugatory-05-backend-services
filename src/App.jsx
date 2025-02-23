import axios from "axios";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import NewWord from "./components/NewWord";
import Word from "./components/Word";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);
  const apiEndpoint = "https://nugatoryapi.azurewebsites.net/api/word";

  const handleDelete = async (wordId) => {
    const originalWords = words;
    setWords(words.filter((w) => w.id !== wordId));
    try {
      await axios.delete(`${apiEndpoint}/${wordId}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        // word already deleted
        console.log(
          "The record does not exist - it may have already been deleted"
        );
      } else {
        alert("An error occurred while deleting a word");
        setWords(originalWords);
      }
    }
  };
  const handleAdd = async (text, r, g, b) => {
    console.log(`add ${text}`);
    const { data: post } = await axios.post(apiEndpoint, {
      text: text,
      r: r,
      g: g,
      b: b,
    });
    setWords(words.concat(post));
  };
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
