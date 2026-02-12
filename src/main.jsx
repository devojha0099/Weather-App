import { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import React from "react";
import "./styles/index.css"; // Global styles
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
