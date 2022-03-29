import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import AppStateProvider from "./server/state";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <AppStateProvider>
              <App />
          </AppStateProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
