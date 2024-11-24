import React from 'react'
import "../Style.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='Header'>
     <Link to="/"> <h3>Home</h3></Link>
     <Link to="/About"> <h3>About</h3></Link>
     <Link to="/Help"> <h3>Help And Support</h3></Link>
     <Link to="/Images"> <h3>Images</h3></Link>
    <Link to="/Login">  <h3>Login</h3></Link>
      </div>
    </div>
  )
}

export default Header
