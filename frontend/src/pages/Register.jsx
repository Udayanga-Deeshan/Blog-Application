import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login'> 
      <h1> User Registration</h1>
      <form action="">
        <input type="text" placeholder='username' required />
        <input type="email" placeholder='email'  required/>
        <input type="text" placeholder='Password'  required/>
        <button>Register</button>
        <p>This is an error</p>
        <span>Don't you have an Account? <Link to ='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
