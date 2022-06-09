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
<<<<<<< HEAD
          <Route path='/reserve/:roomid' exact element={<Reserve />}/>
=======
          <Route path='/reserve/:roomNumber' exact element={<Reserve />}/>
>>>>>>> 2468531c5c9518bf4e8957c0b2033dc0c05648ca
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
