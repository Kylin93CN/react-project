import React from 'react';
import { Row, Col } from 'antd';

import Footer from './components/Footer';
import Header from './components/Header';
import NavLeft from './components/NavLeft';

import './style/common.less';


export default class Root extends React.PureComponent {
  render() {
    return (
      <Row className='container'>
        <Col span='3' className='nav-left'>
          <NavLeft/>
        </Col>
        <Col span='21' className='main'>
          <Header/>
          <Row className='content'>
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