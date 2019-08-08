import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display';

import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<App />);
  });

})

describe('<Display />', () => {
  it ('', () => {
    const display = render(<Display />);
    console.log('DISPLAY', display.getByText('Strikes'))
  })
})
