import React from 'react';

import { Button } from 'antd';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div style={{ margin:40 }}>
        <Button>click me</Button>
      </div>
    )
  }
}