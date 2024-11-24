import React, { useState } from 'react'
import Header from '../Components/Header'
import "../Style.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate=useNavigate()
  
    const [data,setdata]=useState({
      UserName:"",
      Password:""

    })

    function set(e){
      setdata({...data,[e.target.name]:e.target.value})
      

    }

  
  function login(){
    if(data.UserName!==""  &&  data.Password!=="")
    {
      if(data.UserName=="Sachin2204" && data.Password=="Sachin123")
      {
        navigate("/UploadImages")
      }
      else{
                document.getElementById("username").value=""
                document.getElementById("password").value=""
                alert("enter details are wrong")
      }

    }
    else{

      alert("pls fill all the details")
    }

  }
  return (
    <div>
        <Header/>
        <div>
      <img className='welcome' src="Images/13.png" alt="" />
     </div>
     <div className='form'>
      <h2>ENTER USERNAME</h2>
     <input type='text'  id='username' placeholder='Enter Username' onChange={set} name='UserName'/><br/>

    <h2>ENTER PASSWORD</h2>
     <input type='text' id='password' placeholder='Enter Password' onChange={set} name='Password'/><br/>
     <button type='button' className='formbtn' onClick={login}>Login</button><br /><br />
     <span>Forget password ?</span>
     
     
     </div>
    </div>
  )
}

export default Login
