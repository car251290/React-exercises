import React,{useContext} from "react";
import { CalculatorContext, useCalculator } from "../CalculatorContext/CalculatorContext";

function Operations(){

    const {setInput,calculateResult,clear,addNumber} = useCalculator();
    const operations = ['+','-','*','/'];

    return(
        <div className="operations">
        {operations.map((op) => (
         <button 
         key={op} 
         onClick={() => {
           if (op === "=") {
             calculateResult();  // Trigger calculation on "=" button
           } else {
             addNumber(op);  // Add operator to the input
           }
         }} 
         className="btn operation-btn"
       >
         {op}
       </button>
        ))}
        <button onClick={calculateResult} className="btn operation-btn">
          =
        </button>
        <button onClick={clear} className="btn operation-btn">
          C
        </button>
      </div>
    )
}
export default Operations;