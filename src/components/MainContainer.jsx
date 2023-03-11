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
    <div style={{ display:'flex', backgroundColor: '#FFF', width: '695px', height: '640px' }}>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Row>
                    <SwitchBtns />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Display />
              <Operators />
              <Numbers />
              <Equal />
            </Col>
            <Col>
              <Board />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MainContainer