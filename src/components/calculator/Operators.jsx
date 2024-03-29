import React from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addOperator } from '../../slices/calculatorSlice';

const Operators = () => {
  const operatorBtns = ['/', '*', '-', '+'];
  const dispatch = useDispatch();
  
  const handleClick = (operator) => dispatch(addOperator(operator));
  // const isRuntime = useSelector((state) => state.constructor.isRuntime);
  //const clickable = isRuntime ? 'none' : null;

  return (
        <Row key="operators" style={{ height: '56px', pointerEvents: 'auto'}}
            className="shadow mt-2 rounded d-flex align-content-center justify-content-center c-outer-width">
          <div className="gx-2 operators-inner-container c-inner-width">
            {operatorBtns.map((opBtn) => {
              return (
                <Col key={opBtn}>
                  <Button 
                    onClick={() => handleClick(opBtn)}
                    className='border btn-operators' 
                    variant='light' 
                    value={opBtn}>{opBtn}</Button>
                </Col>
              )
            })}
          </div>
        </Row>
  )
}

export default Operators