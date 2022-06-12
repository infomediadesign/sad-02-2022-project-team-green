import React, { useState } from "react";
function Login() {

  return (

    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5">
            <div>
              <h1>Login</h1>
              <input type={"text"} placeholder="User Name"></input><br/>
              <input type={"text"} placeholder="Password"></input><br/>
              <button className="btn btn-primary">Login</button><br/>
            </div>
      </div>
    </div>
    </div>
  )
};
export default Login;
