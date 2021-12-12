import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props) => {
  const [input, setInput] = useState("");

  return (
    <InputGroup className="w-70 mx-auto">
      <FormControl
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyUpCapture={ event => {
            if(event.key === "Enter"){
                props.search(input)
            }
         } }
      />
      <InputGroup.Text as={Button} onClick={()=>{props.search(input)}}>
        <FontAwesomeIcon icon={faSearch} />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default SearchBox