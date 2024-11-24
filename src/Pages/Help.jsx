import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Fire from '../Fire'
import {useNavigate } from 'react-router-dom'

const Help = () => {
 var navigate=useNavigate()
  const[Data,setData]=useState({})
  useEffect(function(){
    Fire.child("News").on("value",function(snap){
      if(snap.val()){
        setData(snap.val())
      }
      else{
        setData({})
      }
    })
  },[])


  function title(mainkey){
    navigate(`/Discription/${mainkey}`)
   

    
  }
  return (
    <div>
        <Header/>
        <div   className='News'>
          <h1>Latest News</h1>
          {
            Object.keys(Data).map(function(key){
              return(
                <div>
                <marquee onClick={()=>title(key) } behavior="alternate" direction=""> TITLE:{Data[key].Title}</marquee>
                <marquee behavior="alternate" direction=""> DISCRIPTION:{Data[key].Discription}</marquee>
                  </div>
                  

              )
            })
          }
          
        </div>
        <div>
          <img src="Images/3.png" alt="" className='Helpimg' />
        </div>
    
    </div>
  )
}

export default Help
