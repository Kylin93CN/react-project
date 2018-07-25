import React from 'react';
import { Menu } from 'antd';
import './index.less';

import menuConfig from '../../config/menuConfig';

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
    }
  }

  componentWillMount() {
    const dataList = this._renderMenu(menuConfig);
    console.log(dataList);
    this.setState({
      menuList: dataList,
    });
  }
  
  _renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this._renderMenu(item.children)}
          </SubMenu>
        )
      } 
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className='logo'>
          <img src='/assets/logo-ant.svg' alt='' />
          <h1>My MS</h1>
        </div>
        <Menu
          theme='dark'
        >
          {this.state.menuList}
        </Menu>
      </div>
    );
  }
}