import React from 'react';
import ReactDOM from 'react-dom/client';

// Asset Library
import { BrowserRouter as Router } from 'react-router-dom'
import AOS from 'aos'

// Components
import App from './App';

// Asset Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.css';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import './styles/global.css'

AOS.init()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
