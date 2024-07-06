// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App.jsx'
// import { ProductProvider } from './context/ProductContext.jsx';
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import './index.css'; // Aquí puedes importar tus estilos globales

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
