import * as React from 'react';
import ReactDom from 'react-dom';
import './stylesheets/main.scss';

ReactDom.render(
  <div className="text-light">Wow</div>,
  document.getElementById('mountNode')
);
