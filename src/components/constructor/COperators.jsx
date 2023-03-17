import React from 'react';
import { Col, Row } from 'react-bootstrap'

const COperators = () => {
  const operatorBtns = ['/', '*', '-', '+'];

  return (
          <Row 
            key="operators" 
            className="shadow mt-4 rounded operators-outer-container c-outer-width">
          <div className="gx-0 operators-inner-container c-inner-width">
            {operatorBtns.map((opBtn) => {
              return (
                <Col style={{ pointerEvents: 'none' }}  key={opBtn}>
                  <div 
                    className='border rounded btn-operators' 
                    value={opBtn}>{opBtn}</div>
                </Col>
              )
            })}
          </div>
        </Row>
  )
}

export default COperators;