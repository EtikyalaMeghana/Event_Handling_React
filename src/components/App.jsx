import React from "react";

function App() {
  const [colo, changecolor] = React.useState("blue");
  const [txt, setText] = React.useState("hi");
  function changeTxt() {
    setText("Hello");
  }
  function setcolor() {
    changecolor("black");
  }
  function setcolor1() {
    changecolor("blue");
  }
  return (
    <div className="container">
      <h1>{txt}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={changeTxt}
        onMouseOver={setcolor}
        onMouseOut={setcolor1}
        style={{ backgroundColor: colo }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
