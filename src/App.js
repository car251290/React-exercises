import React from "react";
import Display from "./Components/Display";
import NumberButtons from "./Components/NumberButtons";
import Operations from "./Components/Operations";
import "./App.css";

function App() {
  return (
 <div className="calculator-container">
 <Display />
 <div className="buttons-container">
   <NumberButtons />
   <Operations />
 </div>
</div>
  );
}

export default App;