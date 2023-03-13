import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNum1, addNum2 } from '../../slices/calculatorSlice';




const Numbers = () => {
  const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const operator = useSelector((state) => state.calculator.operator);
  const dispatch = useDispatch();

  const handleClick = (num) => {
     if (operator === null) {
       dispatch(addNum1(num))
    } else {
        dispatch(addNum2(num))
    }
  };

  return (
    <div key="numbers" className="nums-container rounded shadow mt-2 mb-2 c-outer-width">
      {numsBtns.map((num) => {
      return (
      <Button 
        key={num} 
        className='border btn-num' 
        variant='light' 
        value={num}
        onClick={() => handleClick(num)}
      >
        {num}
      </Button>
      )
      })}
      <Button 
        style={{ width: '152px', height: '48px' }} 
        className='border' 
        variant='light' 
        onClick={() => handleClick(0)}
        value={0}>0</Button>
      <Button 
        className='border btn-num' 
        variant='light'
        onClick={() => handleClick(',')}
        value={','}>,</Button>
    </div>
  )
}

export default Numbers;

// 
