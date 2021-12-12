import React from "react";

const Bookmarks = (props) => {
  console.log(props)
  return (
    <>
      {props.bookmarks.length === 0 ? (
        <h1>No Bookmarks</h1>
      ) : (
        props.bookmarks.map((word) => (
          <h2>{word.word}</h2>
        ))
      )}
    </>
  );
}

export default Bookmarks;