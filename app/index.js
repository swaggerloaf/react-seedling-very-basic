import * as React from 'react';
import ReactDom from 'react-dom';
import './stylesheets/main.scss';

// Dom element and react element
const Button = ({ text }) => (
  <button
    onClick={() => alert('You had me at change!!!!!')}
    type="button"
    className="btn btn-dark"
  >
    <span>{text}</span>
  </button>
);

ReactDom.render(
  <Button text={'Change the World Again'} />,
  document.getElementById('mountNode')
);
