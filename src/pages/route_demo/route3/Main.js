import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {

    render() {
      const url1 = '/main/param-a=123';
      const url2 = '/main/param-b=123';
        return (
            <div>
                this is main page.
                <br/>
                <Link to={url1}>嵌套路由1</Link>
                <br/>
                <Link to={url2}>嵌套路由2</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}