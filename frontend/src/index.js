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
import reportWebVitals from './reportWebVitals';
import './index.css';


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
reportWebVitals();