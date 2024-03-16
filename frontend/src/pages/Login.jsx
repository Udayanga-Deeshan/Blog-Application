import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'> 
      <h1> Login</h1>
      <form action="">
        <input type="text" placeholder='username' required />
        <input type="text" placeholder='Password'  required/>
        <button>Login</button>
        <p>This is an error</p>
        <span>Don't you have an Account? <Link to ='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
