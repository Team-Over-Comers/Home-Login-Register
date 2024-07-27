import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import {BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';

function App() {
  return (
   
       
        
     

      <BrowserRouter>
      
      <Routes>

        <Route index element= {<Home/>}/>

        <Route path='/Home' element={<Home/>}/>

        <Route path='/Register' element={<Register/>}/>

        <Route path='/Log in' element={<Login/>}/>
        
        </Routes> 

      </BrowserRouter>
    
    
      
      
       
          
     
  );
}

export default App;

