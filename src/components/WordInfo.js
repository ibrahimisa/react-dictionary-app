import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import Button from "react-bootstrap/Button";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

function Origin(props) {
  const { origin, ...restProps } = props;
  return (
    <div {...restProps}>
      <h3>Origin</h3>
      <p>{origin}</p>
    </div>
  );
}

const WordInfo = (props) => {
  const word = props.word;
  return (
    <>
      {word === null && !props.isLoading ? (
        <h3>search for words</h3>
      ) : props.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2 className="d-flex justify-content-between">
            {word.word}
            <Button onClick={()=>{ props.handleSave() }}>
              <FontAwesomeIcon icon={faBookmark} className="me-2" />
              Save
            </Button>
          </h2>
          <Phonetics phonetics={word.phonetics} />
          <Origin className="mt-2" origin={word.origin} />
          <Meanings meanings={word.meanings} />
        </>
      )}
    </>
  );
};

export default WordInfo;
