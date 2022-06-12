import React, { useState, useEffect } from "react";
import axios from "axios";
import Sweet from "sweetalert2"

function Login() {

  const [email, saveEmail] = useState();
  const [password, savePassword] = useState();
  async function login() {
    const req = {
      email, password
    }
    const data = await (await axios.post('/users/login', req)).data;
    console.log(data);
    Sweet.fire("Success", "Logged Successfully").then(data => {
      window.location.href = '/home'
    });
  }
  useEffect(() => async function () {
    try {

    } catch (error) {

    }
  }, [])
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={(newuser) => { saveEmail(newuser.target.value) }}></input><br />
            <input type="text" placeholder="Password" value={password} onChange={(newuser) => { savePassword(newuser.target.value) }}></input><br />
            <button className="btn btn-primary" onClick={login}>login</button><br />
          </div>
        </div>
      </div>
    </div>
  );

};
export default Login;


