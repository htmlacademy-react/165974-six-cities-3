import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { listingData } from './data/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// listingData={listingData}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
