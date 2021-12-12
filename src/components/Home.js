import { className } from "postcss-selector-parser";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import WordInfo from "./WordInfo";

const Home = (props) => {
  const [word, setWord] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  async function searchWord(query) {
    setIsSearching(true);
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    setIsSearching(false);
    let data = await response.json();
    let word = data.pop()
    setWord(word);
    props.addToHistory(word);
  }

  function handleSave() {
    props.addToBookmarks(word);
  }

  return (
    <div className="px-5">
      <SearchBox search={searchWord} />
      <WordInfo handleSave={handleSave} word={word} isLoading={isSearching} />
    </div>
  );
};

export default Home;
