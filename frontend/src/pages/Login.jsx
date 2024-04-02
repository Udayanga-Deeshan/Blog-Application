import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const  [inputs,setInputs] = useState({
    username:"",
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
      const res = await axios.post("http://localhost:4000/api/auth/login",inputs)
      console.log(res);
      navigate("/");

    }catch(err){
        // console.log(err);
        setError(err.response.data)
    }
      }
  return (
    <div className='login'> 
      <h1> Login</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' onChange={handleChange} required />
        <input type="password" placeholder='Password' name='password' onChange={handleChange} required />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an Account? <Link to ='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
