import React from 'react';
import ReactDOM from 'react-dom';

import Front from './components/front';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Front />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
