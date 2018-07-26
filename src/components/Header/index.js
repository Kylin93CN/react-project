import React from 'react';
import { Row, Col } from 'antd';

import Utils from '../../utils/utils';
import axios from '../../axios';

import './index.less';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Kylin',
      sysTime: '',
      weatherDetail: '',
      dayPictureUrl: '',
    }
  }

  componentWillMount() {
    setInterval(() => {
      const sysTime = Utils.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    },0);

    this._getWeatherApiData();
  }

  _getWeatherApiData = () => {
    const city = 'hangzhou';
    axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then((res) => {
      if(res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
            dayPictureUrl:data.dayPictureUrl,
            weatherDetail:data.weather
        })
      }
    })
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
            <span className="weatherImg">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className='weatherDetail'>{this.state.weatherDetail}</span>
          </Col>
        </Row>
      </div>
    );
  }
}