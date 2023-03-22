import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataProvidar from './context';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Country from './Components/Country';
import Error from './Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvidar>   
      <Router>
        <Routes>              
            <Route path='/' element={<App />}/> 
            <Route path='/country/:name' element={<Country />}/> 
            <Route path='*' element={<Error />}/> 
        </Routes>
      </Router>  
    </DataProvidar>
  </React.StrictMode>,
)
