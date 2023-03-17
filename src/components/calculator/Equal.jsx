import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const Equal = () => {
  return (
          <Row 
              key="equal" 
              className="shadow mt-2 rounded btn-equal-container c-outer-width">
            <Col>
                  <Button className='c-inner-width btn-equal rounded'>=</Button>
            </Col>
        </Row>
  )
}

export default Equal;
