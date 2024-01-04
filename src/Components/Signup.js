import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Signup = () => {

  const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
  const navigate = useNavigate()
 

  const handleSubmit = async (e)=>{

    e.preventDefault();
    const {name,email,password}=credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser",{
        
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          },
          body: JSON.stringify({name,email,password})
      });
      const json = await response.json()
      console.log(json);
      if(json.success)
      {
        //Save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate('/');
        
      }
      else{
        alert("Invalid credentials")
      }

    }
    
    const onChange = (e)=>{
    
      setCredentials({...credentials , [e.target.name]:e.target.value})
  }
  return (
    <div className="mt-4">
      <h2 className="my-2">Create an Account to Login</h2>

      <form onSubmit={handleSubmit}>
      <div class="mb-3">        
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Please enter your name"
            name="name"
            id="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Please enter your email address"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            minLength={5} required
            class="form-control"
            placeholder="Enter your password"
            onChange={onChange}
            id="password"
          />
        </div>
        <div class="mb-3">
          <label for="cpassword" class="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            onChange={onChange}
            placeholder="Confirm your password"
            id="cpassword"
            name="cpassword"
          />
        </div>       
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup;
