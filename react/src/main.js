import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <h1>wtf why isnt this working</h1>,
    document.getElementById('app')
  );
});
