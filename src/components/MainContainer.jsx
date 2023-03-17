import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Board from './Board';
import Box from './constructor/Box';
import CDisplay from './constructor/CDisplay';
import CEqual from './constructor/CEqual';
import CNumbers from './constructor/CNumbers';
import COperators from './constructor/COperators';
import SwitchBtns from './SwitchBtns';

const renderDrag = (element, name) => {
  const isDroped = useSelector((state) => state.ui.elements.mainContainer[name]);
  const dropStyle = { pointerEvents: 'none', opacity: 0.4 };
  if (isDroped) {
    return <div style={dropStyle}>{element}</div>
  } else {
    return <Box name={name}>{element}</Box>;
  }
}

const MainContainer = () => {
  // const isRuntime = useSelector((state) => state.ui.isRuntime);
  // console.log(isRuntime);

  return (
    <div className="main-content-container">
        <Row>
          <Col> 
                <div                   
                  className="elements-container ">
                    {renderDrag(<CDisplay />, 'display')}
                    {renderDrag(<COperators />, 'operators')}
                    {renderDrag(<CNumbers />, 'numbers')}
                    {renderDrag(<CEqual />, 'equal')}
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

export default MainContainer;