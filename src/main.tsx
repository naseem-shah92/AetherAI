// Suppress Spline scene schema update warnings that clutter the console
const originalWarn = console.warn;
console.warn = (...args: any[]) => {
  if (
    args.length >= 2 &&
    typeof args[0] === "string" &&
    args[0].includes("updating from")
  ) {
    return;
  }
  originalWarn(...args);
};

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
