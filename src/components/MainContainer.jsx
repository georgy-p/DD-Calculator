import { Col, Row } from 'antd';
import { ReactComponent as Eyelogo} from '../img/eye-outline.svg';
import { ReactComponent as  Codelogo } from '../img/code-outline.svg';

const tabStyle = {
  padding: '1px',
  width: '243px',
  height: '38px',
  left: '372px',
  marginTop: '38px',
  background: '#F3F4F6',
  borderRadius: '6px',
}

const svgStyle = {
  width: '20px',
  fill: '#5D5FEF',
};

const MainContainer = () => {
  return (
    <div style={{ backgroundColor: '#FFF', width: '695px', height: '640px' }}>
      <Row gutter={16}>
        <Col span={24}>
          <Row gutter={16}>
            <Col span={6} offset={12}>
              <Row style={tabStyle} gutter={16}>
                <Col span={12} className="gutter-row">
                  <Row>
                    <Col>
                      <Eyelogo style={svgStyle} />
                    </Col>
                    <Col>
                      <p>Runtime</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                      <Col>
                        <Codelogo style={svgStyle} />
                      </Col>
                      <Col>
                        <p>Constructor</p>
                      </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="gutter-row">
              <div>Result Window</div>
              <div>Operators</div>
              <div>numbers</div>
              <div>Equal button</div>
            </Col>
            <Col span={12} className="gutter-row">
              <div style={{ overflow: 'hidden' }}>Перетащите сюда</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MainContainer