import React from 'react';
import './index.less';
export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className='footer'>
        <div>版权声明</div>
        <div>对于上述版权内容，超越合理使用范畴、并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。</div> 
      </div>
    );
  }
}