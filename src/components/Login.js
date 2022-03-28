import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
      <h1>Login</h1>
      <input type='email' className='input' placeholder='Email'/>
      <input type='password' className='input' placeholder='password'/>
      <button type='submit' className='button'>Login</button> 
      </form>
       </div>
  )
}

export default Login
