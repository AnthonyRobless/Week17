/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);