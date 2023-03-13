import React, { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Board from './Board';
import Display from './calculator_parts/Display';
import Equal from './calculator_parts/Equal';
import Numbers from './calculator_parts/Numbers';
import Operators from './calculator_parts/Operators';
import SwitchBtns from './SwitchBtns';



const MainContainer = () => {
  const isRuntime = useSelector((state) => state.constructor.isRuntime);

  const onDragEnd = useCallback(() => {
    //
  }, [])

  return (
    <div className="main-content-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          <Col>
            {!isRuntime &&  
            <div className="elements-container">
              <Display />
              <Operators />
              <Numbers />
              <Equal />
            </div>
            }
          </Col>
          <Col>
            <div className="mode-container">
              <SwitchBtns />
              <Board />
            </div>
          </Col>
        </Row>
      </DragDropContext>
    </div>
  )
}

export default MainContainer;