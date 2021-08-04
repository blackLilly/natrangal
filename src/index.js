import React from 'react';
import * as Snap from "react-snapshot";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  Snap.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , rootElement);
} else {
  Snap.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , rootElement);
}