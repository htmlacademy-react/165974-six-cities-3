import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting, listingData } from './data/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesFoundCount={Setting.PlacesFoundCount} listingData={listingData} />
  </React.StrictMode>
);
