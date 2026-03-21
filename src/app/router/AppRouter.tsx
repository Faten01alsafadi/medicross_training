import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';

 

const AppRouter: React.FC= () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    

   </Routes>
   </BrowserRouter>
  );
};

export default AppRouter;
