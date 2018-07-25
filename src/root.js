import React from 'react';
import { Row, Col } from 'antd';

import Footer from './components/Footer';
import Header from './components/Header';


export default class Root extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col span='3'>left</Col>
        <Col span='21'>
          <Header>
            Header
          </Header>
          <Row>
            Contain
          </Row>
          <Footer>
            Footer
          </Footer>
        </Col>
      </Row>
    );
  }
}