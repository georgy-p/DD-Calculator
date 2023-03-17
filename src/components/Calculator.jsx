import React from 'react';
import { useSelector } from 'react-redux';
import { calculatorComponents } from './calculator/index';

const Calculator = () => {
  const elements = useSelector((state) => state.ui.elements.board);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {elements.map((el) => <div key={el}>{calculatorComponents[el]()}</div>)}
    </div>
  )
}

export default Calculator