import React, { useState } from "react";

function Signup(){
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5">
            <div>
              <h1>Signup</h1>
              <input type={"text"} placeholder="User Name"></input><br/>
              <input type={"text"} placeholder="Email"></input><br/>
              <input type={"text"} placeholder="Password"></input><br/>
              <button className="btn btn-primary">Signup</button><br/>
            </div>
      </div>
    </div>
    </div>
  );
};
export default Signup;