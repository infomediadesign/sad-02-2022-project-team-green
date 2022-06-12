import React, { useState, useEffect } from "react";
import axios from "axios";
import Sweet from "sweetalert2"

function Signup(){
  
  const [username,saveUserName] = useState();
  const [email,saveEmail] = useState();
  const [password,savePassword] = useState();
  async function signUp(){
    const register = {
        username,email,password   
       }
    const data = await (await axios.post('/users/signup',register)).data;
     console.log(data);
    Sweet.fire("Success","Registered Successfully").then(data=>{
        window.location.href='/login'
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
              <h1>Signup</h1>
              <input type="text" placeholder="User Name" value={username} onChange={(newuser)=>{saveUserName(newuser.target.value)}}></input><br/>
              <input type="text" placeholder="Email" value={email} onChange={(newuser)=>{saveEmail(newuser.target.value)}}></input><br/>
              <input type="text" placeholder="Password" value={password} onChange={(newuser)=>{savePassword(newuser.target.value)}}></input><br/>
              <button className="btn btn-primary" onClick={signUp}>Signup</button><br/>
            </div>
      </div>
    </div>
    </div>
  );
  
};
export default Signup;

