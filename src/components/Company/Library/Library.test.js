import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Library />, div);
  ReactDOM.unmountComponentAtNode(div);
});