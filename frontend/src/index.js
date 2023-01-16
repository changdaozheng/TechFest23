import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Campaigns from './Pages/Campaigns';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Table from './Components/Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Dashboard />} />
        <Route path='/Campaigns*' element={<Campaigns />} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
