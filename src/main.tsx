// import { StrictMode } from 'react';
import React from 'react'
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'; // Importer HashRouter au lieu de BrowserRouter

import App from './App.tsx';
import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> {/* Utiliser HashRouter à la place de BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
);
