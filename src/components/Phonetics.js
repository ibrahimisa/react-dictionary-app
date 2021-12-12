import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons/faVolumeUp";

const Phonetics = (props) => (
  <>
    {props.phonetics.map((phonetic) => {
      const audio = document.createElement("audio");
      audio.src = phonetic.audio;
      console.log(audio);
      return (
        <>
          <i>\{phonetic.text}\</i>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faVolumeUp}
            onClick={() => {
              audio.play();
            }}
          />
        </>
      );
    })}
  </>
);

export default Phonetics;
