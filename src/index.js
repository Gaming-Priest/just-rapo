import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.less';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
