// Vite application entry point
// - Import global styles (index.css)
// - Render the root App component
// - Mount to the DOM element with id 'root'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS / Tailwind directives
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);