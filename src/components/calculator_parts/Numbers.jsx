import React from 'react';
import { Button } from 'react-bootstrap';


const Numbers = () => {
  return (
    <div className="nums-container rounded shadow mt-2 mb-2 c-outer-width">
         <Button className='border btn-num' variant='light'>7</Button>
         <Button className='border btn-num' variant='light'>8</Button>
         <Button className='border btn-num' variant='light'>9</Button>
         <Button className='border btn-num' variant='light'>9</Button>
         <Button className='border btn-num' variant='light'>5</Button>
         <Button className='border btn-num' variant='light'>6</Button>
         <Button className='border btn-num' variant='light'>1</Button>
         <Button className='border btn-num' variant='light'>2</Button>
         <Button className='border btn-num' variant='light'>3</Button>
         <Button style={{ width: '152px', height: '48px' }} className='border' variant='light'>0</Button>
         <Button className='border btn-num' variant='light'>,</Button>
    </div>
  )
}

export default Numbers;

// 
