import React from 'react';
import { Col, Row } from 'react-bootstrap';


const CDisplay = () => {
  return (
        <Row
          key="display" className="shadow rounded display-main-container c-outer-width">
            <Col className="d-flex justify-content-center align-items-center">
              <Row className="display-inner-container c-inner-width rounded">
                <Col style={{ width: "100%" }}>
                  <p className="display-inner-value">0</p>
                </Col>
              </Row>
            </Col>
        </Row>
  )
}

export default CDisplay;