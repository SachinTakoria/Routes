import React from 'react'
import "../Style.css"
import { Link } from 'react-router-dom'


const AdminHeader = () => {
  return (
    <div>
      <div className='Header'>
      <Link to="/UploadImages">  <h3>UploadImages</h3></Link>
       <Link to="/UploadNews"> <h3>UploadNews</h3></Link>
       <Link to="/UploadContact"> <h3>UploadContact</h3></Link>
       <Link to="/"> <h3>LogOut</h3></Link>
      </div>
    </div>
  )
}

export default AdminHeader
