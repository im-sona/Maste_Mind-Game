// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Game from './Components/Game';
// import Spin from './Components/Spin';
// import Home from './Components/Home';
// import Mastermind from './Components/ui/Mastermind';

import './App.css';
import Homes from './Components/Homes';
import About from './Components/About';
function App() {
  

  return (
  
   
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homes />} /> 
            
            <Route path='/about' element={<About />} />
            {/* <Route path='/game' element={<Game />} />
            <Route path='/master' element={<Mastermind  level="medium"  />} /> */}
          </Routes>
        </BrowserRouter>
      </div> 
     

 

  );
}

export default App;
