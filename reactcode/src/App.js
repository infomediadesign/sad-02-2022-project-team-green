import React  from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './View/Home';
import Nav from './Component/Nav';
import Reserve from './View/Reserve';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <Routes>
          <Route path='/home' exact element={<Home />}/>
          <Route path='/reserve/:roomNumber' exact element={<Reserve />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
