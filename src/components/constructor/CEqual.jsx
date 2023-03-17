import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Equal = () => {

  return (
          <Row 
              key="equal" 
              className="shadow rounded btn-equal-container c-outer-width">
            <Col>
                  <div className='c-inner-width btn-equal rounded'>=</div>
            </Col>
        </Row>
  )
}

export default Equal;
