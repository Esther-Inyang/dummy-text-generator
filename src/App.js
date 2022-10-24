import React, { useState } from "react";
import data from "./data";
import "./index.css";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState();

  const submitNum = (e) => {
    e.preventDefault();
    let paraCount = parseInt(count);

    if (count <= 0) {
      paraCount = 1;
    }
    if (count >= 8) {
      paraCount = 8;
    }

    setText(data.slice(0, paraCount));
  };

  return (
    <div className="container">
      <h1 className="page-title">
        Tired of boring Lorem Ipsum?{" "}
        <span className="title-span">Create your 'own' dummy texts..</span>
      </h1>

      <form onSubmit={submitNum} className="form">
        <label htmlFor="para" className="para">
          Paragraphs:
        </label>
        <input
          type="number"
          name="para"
          id="para"
          placeholder="1 - 8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="input"
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="text-container">
        <h2 className="para-length">
          <span className="length">{text.length}</span> paragraphs generated.
        </h2>

        {text.length === 0 && <p className="text">{data[0]}</p>}

        {text.length > 0 && (
          <div>
            {text.map((txt, index) => {
              return (
                <p key={index} className="text">
                  {txt}
                </p>
              );
            })}
          </div>
        )}
      </article>
    </div>
  );
}

export default App;
