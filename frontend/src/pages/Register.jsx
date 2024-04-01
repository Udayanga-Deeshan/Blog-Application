import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const  [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err,setError] = useState(null)

  const navigate =  useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  // console.log(inputs);
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      console.log("work");
      const res = await axios.post("http://localhost:4000/api/auth/register",inputs)
      // console.log(res);
      navigate("/login");

    }catch(err){
        // console.log(err);
        setError(err.response.data)
    }
      }
  return (
    <div className='login'> 
      <h1> User Registration</h1>
      <form >
        <input type="text" placeholder='username' name='username'required onChange={handleChange} />
        <input type="email" placeholder='email' name='email'  required onChange={handleChange}/>
        <input type="password" placeholder='Password' name='password'  required onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err &&<p>{err}</p>}
        <span>Don't you have an Account? <Link to ='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register 
