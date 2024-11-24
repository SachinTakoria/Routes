import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Help from "./Pages/Help"
import Login from "./Pages/Login"
import UploadImages from "./Adminpages/UploadImages"
import UploadNews from "./Adminpages/UploadNews"
import Discription from './Pages/Discription'
import Images from './Pages/Images'
import Uploadcontact from './Adminpages/Uploadcontact'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Help' element={<Help/>}/>
     <Route path='/Images' element={<Images/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Discription/:key' element={<Discription/>}/>
     <Route path='/UploadImages' element={<UploadImages/>}/>
     <Route path='/UploadContact' element={<Uploadcontact/>}/>
     <Route path='/UploadNews' element={<UploadNews/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
