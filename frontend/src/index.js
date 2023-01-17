import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Campaigns from './Pages/Campaigns';
import Datalogger from "./Pages/Datalogger"
import MLPage from './Pages/MLPage';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Dashboard />} />
        <Route path='/Campaigns/*' element={<Campaigns />} />
        <Route path='/Datalogger/*' element={<Datalogger />} />
        <Route path='/MLPage/*' element={<MLPage />} />
      </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
