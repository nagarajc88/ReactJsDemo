import React from 'react';
import ReactDOM from 'react-dom';
import AuthLayout from './AuthLayout';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});