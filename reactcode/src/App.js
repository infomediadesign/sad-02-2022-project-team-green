import React  from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './View/Home';
import Nav from './Component/Nav';
import Reserve from './View/Reserve';
import Hoteladmin from './View/Hoteladmin';
import Login from './View/Login';
import Signup from './View/Signup';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <Routes>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/Signup' exact element={<Signup />}/>
          <Route path='/home' exact element={<Home />}/>
          <Route path='/admin' exact element={<Hoteladmin />}/>
          <Route path='/reserve/:roomid/:checkin/:checkout' exact element={<Reserve />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
