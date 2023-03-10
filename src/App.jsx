import { Col, Row, Layout, Typography, Space } from 'antd';
import logo from './img/calculator.svg'
import MainContainer from './components/MainContainer';

const { Header, Content, Footer } = Layout;

const headerStyle = {
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#6C6765',
};

const titleStyle = {
  color: '#fff',
  fontSize: 25,
};

const contentStyle = {
  height: '70vh',
  marginTop: 200,
}


const App = () => {
  return (
    <Layout className="kayout">
      <Header style={headerStyle}>
        <Space>
        <div className="logo"><img src={logo} alt="logo"  /></div>
          <Typography.Text style={titleStyle}>Super Calculator</Typography.Text>
        </Space>
      </Header>
      <Content style={contentStyle}>
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
        <MainContainer />
        </Col>
       </Row>
      </Content>
      <Footer align="center">Georgy Pigar's development</Footer>
    </Layout>
  );
}

export default App;
