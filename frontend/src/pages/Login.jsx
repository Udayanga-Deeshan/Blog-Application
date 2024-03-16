import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'> 
      <h1> Login</h1>
      <form action="">
        <input type="text" placeholder='username' />
        <input type="text" placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
