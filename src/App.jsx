import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import logo from './img/calculator.svg'
import MainContainer from './components/MainContainer';

// className="col-md-5 mx-auto"


const App = () => {
  return (
    <Container>
      <div className="main-header">
        <Row className="justify-content-center">
          <Col className='col-1'>
            <img src={logo} alt="logo"  />
          </Col>
          <Col>
            <h3 className="main-title">Super Calculator</h3>
          </Col>
        </Row>
      </div>
      <Row>
        <Col className="main-content-container" md={{ span: 6, offset: 3 }}>
        <MainContainer />
        </Col>
       </Row>
      <div style={{ textAlign: 'cetner' }}>Georgy Pigar{`'`}s development</div>
    </Container>
  );
}

export default App;
