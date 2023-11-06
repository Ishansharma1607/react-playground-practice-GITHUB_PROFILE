import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const runs = () => {
document.getElementById('yohtml').innerHTML = `
 <div>
      Hello HTML
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
`;


render(
  React.createElement(
    'div',
    null,
    'Hello REACT ',
    React.createElement('input', null),
    React.createElement('pre', null, (new Date).toLocaleTimeString())
  ),
  document.getElementById('root')
);
  };

  setInterval(runs, 1000);

