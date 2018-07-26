import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import IRouter from './pages/route_demo/route3/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IRouter />, document.getElementById('root'));
registerServiceWorker();
