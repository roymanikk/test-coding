import React from "react";
import { useState } from "react";

function TestArray() {
  const [Input, setInput] = useState();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div>
        <input
          type="number"
          value={Input || ""}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Hide" : "Generate"}
        </button>
        {isClicked ? <GenerateResult input={Input} /> : ""}
      </div>
    </div>
  );
}

function GenerateResult(input) {
  return input?.input?.split("")?.map((element, index) => {
    while (index <= input?.input.length)
      return element !== "0" ? (
        <h1 key={index}>
          {element?.padEnd(input?.input?.split("")?.length - index, "0")}
        </h1>
      ) : (
        ""
      );
  });
}

export default TestArray;
