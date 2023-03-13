import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const numNormalize = (numArr) => +numArr.join('');


const Display = () => {
  const rawNum1 = useSelector((state) => state.calculator.nums.num1);
  const rawNum2 = useSelector((state) => state.calculator.nums.num2);

  const render = rawNum2.length === 0 ? numNormalize(rawNum1) : numNormalize(rawNum2);

  return (
      <Row key="display" className="shadow rounded display-main-container c-outer-width">
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="display-inner-container c-inner-width rounded">
            <Col style={{ width: "100%" }}>
              <p className="display-inner-value">{render}</p>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

export default Display;