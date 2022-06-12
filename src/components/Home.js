
import React, { useState } from 'react'
import './Home.css'
import pic5 from'../images/pic5.jpg'



const Home = () => {

const  [email,setemail] = useState("");
const  [password,setpassword] = useState("");



  return (
    
 <div className='bg centered-content' style={{ backgroundImage: `url(${pic5})` }}>

    


    <div className='form-container'>
      <form className='form'>
      <h1> Login</h1>
      <input  value={email}type='email' className='input' placeholder='Email'onChange={(e)=>setemail(e.target.value)}/>
      <input value={password}type='password' className='input' placeholder='Password'onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={ () => alert('Trying to create account with username: ' + email + ' and password: ' + password) }type='submit' className='button'>Login</button> 
      </form>
       </div>

</div>    
    
  )
}

export default Home;
