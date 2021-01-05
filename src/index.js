//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component

const App = function () {
  const buttonText = { text: "Click me" };
  return (
    <>
      <label className="label" htmlFor="name">
        Type some text
      </label>
      <input id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {[...buttonText]}
      </button>
    </>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
