import React, { useState, useEffect } from "react";
import axios from "axios";
import Sweet from "sweetalert2"


function Login() {
  const [loading, saveloading] = useState();
  const [error, saveerror] = useState();
  const [email, saveEmail] = useState();
  const [password, savePassword] = useState();
  async function login() {
    const req = {
      email, password
    }
    try{
    saveloading(true);
    const data = await (await axios.post('/users/login', req)).data;
    saveloading(false);
    localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/home';
  }
  catch(err){
      saveerror(true);
      saveloading(false);
      Sweet.fire("","Invalid credentials").then(data=>{
        window.location.href='/login';
  })
  }
  }
  async function register(){
    window.location.href ="/signup";
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={(newuser) => { saveEmail(newuser.target.value) }}></input><br />
            <input type="text" placeholder="Password" value={password} onChange={(newuser) => { savePassword(newuser.target.value) }}></input><br />
            <button className="btn btn-primary" onClick={login}>login</button>
            <button className="btn btn-secondary" onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );

};
export default Login;


