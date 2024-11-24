import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Fire from '../Fire'
import { useParams } from 'react-router-dom'

const Discription = () => {
    var param=useParams()
    const [getdata,setgetdata]=useState({})
    useEffect(function(){
        Fire.child("News").on("value",function(snap){
            if(snap.val()){
            setgetdata(snap.val()[param.key])
            }
            else{
                setgetdata({})
            }
        })
    },[])
  return (
    <div>
      <Header/>
     <marquee direction="down"> <h1>{getdata.Discription}</h1></marquee>
    </div>
  
  )
}

export default Discription
