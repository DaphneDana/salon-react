import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

 const rootElement = document.getElementById('root');
 if (!rootElement) throw new Error('Failed to find the root element'); // Good practice to check

 ReactDOM.createRoot(rootElement).render(
   <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </React.StrictMode>
 );
