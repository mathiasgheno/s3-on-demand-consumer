require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';

const appElement = document.getElementById('app');

window.__runtime = {
  API_HOST: process.env.API_HOST,
}

ReactDom.render(<App />, appElement);

//see: https://www.youtube.com/watch?v=WDpxqopXd9U&ab_channel=JuniorDeveloperCentral
