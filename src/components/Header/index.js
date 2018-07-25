import React from 'react';
import { Row, Col } from 'antd';

import Utils from '../../utils/utils';

import './index.less';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Kylin',
      sysTime: '',
      weatherDetail: 'xxx',
    }
  }

  componentWillMount() {
    setInterval(() => {
      const sysTime = Utils.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    },0);
  }

  render() {
    return (
      <div className='header'>
        <Row className='headerTop'>
          <Col span='24'>
            <span>欢迎, {this.state.userName}</span>
            <a href='#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span='4' className='breadcrumbTitle'>
            首页
          </Col>
          <Col span='20' className='weather'>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weatherDetail'>{this.state.weatherDetail}</span>
          </Col>
        </Row>
      </div>
    );
  }
}