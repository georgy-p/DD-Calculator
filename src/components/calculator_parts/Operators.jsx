import React from 'react';
import { Button, Col, Row } from 'react-bootstrap'

const Operators = () => {
  return (
    <Row style={{ height: '56px'}}
      className="shadow mt-4 rounded d-flex align-content-center justify-content-center c-outer-width">
      <div className="gx-2 operators-inner-container c-inner-width">
        <Col>
              <Button className='border btn-operators' variant='light'>/</Button>
        </Col>
        <Col>
              <Button  className='border btn-operators' variant='light'>x</Button>
        </Col>
        <Col>
              <Button  className='border btn-operators' variant='light' >-</Button>
        </Col>
        <Col>
              <Button className='border btn-operators' variant='light'>+</Button>
        </Col>
      </div>
    </Row>
  )
}

export default Operators