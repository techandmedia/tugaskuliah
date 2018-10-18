import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/antd/dist/antd.min.css';
import '../node_modules/antd/dist/antd.min.js';
import App from './App';

// const Wrapper = styled.section`
//   display: flex;
//   padding: 10px;`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
