import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

const Images = () => {
   
    const [arr,setArr]=useState(JSON.parse(localStorage.getItem("key")))
    
  return (
    <div>
        <Header/>
     {
       arr.map(function(url){
        return(
            <img height={"150px"} width={"150px"} src={url} alt="" />
        )

       })
     }
      
    </div>
  )
}

export default Images
