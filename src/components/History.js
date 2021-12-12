import React from "react";

const History = (props) => {
  console.log(props.word)
  return (
    <>
      {props.history.length === 0 ? 
      (<h1>No History</h1>) :
      props.history.map( word => (
        <h2>{word.word}</h2>
       ) )
      }
    </>
  );
};

export default History;
