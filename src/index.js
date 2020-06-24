import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerServiceWorker } from './service-worker';
import SideMenu from './layout/SideMenu';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <SideMenu />,
document.getElementById('nav-bar')
);

registerServiceWorker();
