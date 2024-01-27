// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RegistrationForm} from './components/RegistrationForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <RegistrationForm />
    </React.StrictMode>
  );
