import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import logo from './img/calculator.svg'
import MainContainer from './components/MainContainer';

// className="col-md-5 mx-auto"


const App = () => {
  return (
    <Container>
      <div className="main-header">
        <Row className="justify-content-center align-items-center">
          <Col className='col-1'>
            <img src={logo} alt="logo"  />
          </Col>
          <Col>
            <h3 className="main-title">Super Calculator</h3>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
        <div className="main-container">
          <MainContainer />
        </div>
        </Col>
       </Row>
      
    </Container>
  );
}

export default App;
