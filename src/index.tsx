import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const appElementId = 'root';
const container = document.getElementById(appElementId) as Element;
const root = ReactDOM.createRoot(container);

root.render(<App />);
