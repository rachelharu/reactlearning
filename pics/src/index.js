import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages();

const el = document.getElementById('root');
const root = ReactDOM.createRoom(el);

root.render(<App />);