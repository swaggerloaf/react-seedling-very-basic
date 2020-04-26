import * as React from 'react';
import * as ReactDom from 'react-dom';
import './stylesheets/main.scss';

function Pokemon() {
  let pokémon = 'Brian';
  return (
    <div className="pokemon">
      Hello, <span>{pokémon}</span>!
    </div>
  );
}

const domElement = document.getElementById('root');
ReactDom.render(<Pokemon />, domElement);
