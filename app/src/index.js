import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './Register';
import Login from './Login'
import GlobalVariablesWraper from './modalContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalVariablesWraper>
  <Register />
  {/* <Login /> */}
  </GlobalVariablesWraper>
  </React.StrictMode>
);