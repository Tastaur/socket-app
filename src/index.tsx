import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


render(<App />, document.getElementById('root'));

// @ts-ignore
if (module.hot){
  // @ts-ignore
  module.hot.accept('./App', () => {
    const UpdatedAppRoot = require('./App').default; // eslint-disable-line global-require
    render(<UpdatedAppRoot />, document.getElementById('root'));
  });
}
