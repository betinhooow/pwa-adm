import React from 'react';
import ReactDOM from 'react-dom';
import { registerServiceWorker } from './service-worker';

ReactDOM.render(
    <h1>opa</h1>,
  document.getElementById('root')
);

registerServiceWorker();
