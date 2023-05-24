import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ComondContextProvider } from './Components/Context/ComondContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComondContextProvider>
      <App />
    </ComondContextProvider>
  </React.StrictMode>
);


