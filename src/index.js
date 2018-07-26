import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import Demo1 from './pages/route_demo/route2/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demo1 />, document.getElementById('root'));
registerServiceWorker();
