import React, { StrictMode } from 'react';  // Import StrictMode from React
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import App from './App.jsx';


function Myapp() {
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
  
}
const rootElement = document.getElementById('root');


const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
    <Myapp />
  </StrictMode>
);
