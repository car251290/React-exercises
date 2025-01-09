import React,{useContext} from "react";

import { useCalculator } from "../CalculatorContext/CalculatorContext";

const NumberButtons = () => {  
const {addNumber} = useCalculator();
const numbers = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.'],
  ];

return (
    <div className="number-buttons">
    {numbers.map((row, rowIndex) => (
      <div key={rowIndex} className="button-row">
        {row.map((num) => (
          <button key={num} onClick={() => addNumber(num)} className="btn number-btn" >
            {num}
          </button>
        ))}
      </div>
    ))}
  </div>
);
 };
 export default NumberButtons;