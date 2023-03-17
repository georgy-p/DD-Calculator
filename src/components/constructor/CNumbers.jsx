import React from 'react';

const Numbers = () => {
  const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
          <div 
              key="numbers" 
              className="nums-container rounded shadow mt-2 mb-2 c-outer-width">
            {numsBtns.map((num) => {
              return (
              <div 
                key={num} 
                className='border rounded btn-num' 
              >
                {num}
              </div>
            )
            })}
            <div 
              style={{ width: '152px', height: '48px' }} 
              className='border rounded btn-num' 
              value={0}>0</div>
            <div 
              className='border rounded btn-num' 
              value={','}>,</div>
        </div>
  )
}

export default Numbers;
