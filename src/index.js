import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import config from './config';

import 'bootstrap/dist/css/bootstrap.min.css';

import './stylesheets/index.css';
import App from './App';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'scores',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
