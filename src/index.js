import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DiskNumber from './DiskNumber';

ReactDOM.render(
  <React.StrictMode>
    <DiskNumber />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function ClickSubmit(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

