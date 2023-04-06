import React from 'react';
import ReactDOM from 'react-dom/client'

import App from './App';

import './index.css'
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
       <BrowserRouter>
       <AnimatePresence >
            <App />
       </AnimatePresence>
       </BrowserRouter>
    </StrictMode>
)