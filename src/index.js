import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { UserProvider } from './pages/Components/UserProvider';
=======
>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <UserProvider>
      <App />
    </UserProvider>
=======
    <App />
>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
  </React.StrictMode>
);

reportWebVitals();
