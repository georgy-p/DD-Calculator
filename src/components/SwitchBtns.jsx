import React from 'react';
import { Col, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { ReactComponent as Eyelogo} from '../img/eye-outline.svg';
import { ReactComponent as  Codelogo } from '../img/code-outline.svg';
import { useDispatch } from 'react-redux';
import { offRuntime, onRuntime } from '../slices/uiSlice';
import { useSelector } from 'react-redux';



const SwitchBtns = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.ui.elements);
  
  // Намеренно пока не вызываю функцию, потому что возникает ошибка редьюсера
  const handleOn = () => dispatch(onRuntime());
  const handleOff = () => dispatch(offRuntime());
  const nonClickable = { pointerEvents: 'none' };
  const isCompleteConstructor = elements && elements.length === 4 ? null : nonClickable;


  return (
    <div style={isCompleteConstructor} className="switch-btns">
      <ToggleButtonGroup type="radio" defaultValue={2} name="options">
          <ToggleButton onClick={handleOn} id="tbg-1" variant="light" className="btn-runtime" value={1}>
            <Row>
              <Col className='col-1'><Eyelogo /></Col>
              <Col className="btn-text">Runtime</Col>
            </Row>
          </ToggleButton>
          <ToggleButton onClick={handleOff} id="tbg-2" variant="light" className="btn-constructor" value={2}>
            <Row>
              <Col className='col-1'><Codelogo /></Col>
              <Col className="btn-text">Constructor</Col>
            </Row>
          </ToggleButton>
        </ToggleButtonGroup>
    </div>
  )
}

export default SwitchBtns