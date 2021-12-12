import React from "react"

function Nonyms(props) {
  return (
    <>
      {props.nonyms.length === 0 ? (
        ""
      ) : (
        <div className="d-flex flex-wrap align-items-center">
          <h6 className="m-0">{props.name}:</h6>
          {props.nonyms.map((nonym) => (
            <a href="" className="mx-1">
              {nonym}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function Definitions(props) {
  return (
    <>
      {props.definitions.map((definition) => (
        <div className="border-bottom border-2 my-2 p-2">
          <div className="ps-4">
            <p className="my-1">{definition.definition}</p>
            {definition.example && (
              <li>
                <i>{definition.example}</i>
              </li>
            )}
          </div>
          <Nonyms name="Synonyms" nonyms={definition.synonyms} />
          <Nonyms name="Antonyms" nonyms={definition.antonyms} />
        </div>
      ))}
    </>
  );
}

const Meanings = (props) => (
  <>
    {props.meanings.map((meaning) => (
      <div className="mt-3">
        <h3>{meaning.partOfSpeech}</h3>
        <Definitions definitions={meaning.definitions} />
      </div>
    ))}
  </>
);

export default Meanings