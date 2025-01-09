import React from 'react'
import { useCalculator} from '../CalculatorContext/CalculatorContext'


function Display() {
    const {input,result} = useCalculator();
    return (
       <div className='display'>
        <input type="text" 
        value={input}
        readOnly
        placeholder='0'
        className='display-input'/>
        <div className='result'>
            {result && <span>Result: {result}</span>}
        </div> 
       </div>

    );
};
export default Display;