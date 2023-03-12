import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Board from './Board';
import Display from './calculator_parts/Display';
import Equal from './calculator_parts/Equal';
import Numbers from './calculator_parts/Numbers';
import Operators from './calculator_parts/Operators';
import SwitchBtns from './SwitchBtns';



const MainContainer = () => {
  return (
    <div className="main-content-container">
      <Row>
        <Col>
          <div className="elements-container">
            <Display />
            <Operators />
            <Numbers />
            <Equal />
          </div>
        </Col>
        <Col>
          <div className="mode-container">
            <SwitchBtns />
            <Board />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MainContainer