import React, { createContext, useState,useContext } from "react";


export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [input, setInput] = useState(" ");
  const [result, setResult] = useState("");

  const addNumber = (num) => {
    setInput((prev) => prev + num);
  }


  const calculateResult = () => {
    try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput(input + '='+ evalResult); 
    } catch {
      setResult("Error");
      setInput(" ");  
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <CalculatorContext.Provider
      value={{ input, result, addNumber, calculateResult, clear }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);