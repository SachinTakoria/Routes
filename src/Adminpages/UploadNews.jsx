import React, { useEffect, useState } from 'react'
import AdminHeader from "../Admincomponents/AdminHeader"
import Fire from "../Fire"

const UploadNews = () => {
  let [Data,setData]=useState({
    Title:"",
    Discription:""
  })
  const [getData,setgetData]=useState({})
  const[id,setid]=useState("")
  useEffect(function(){
    Fire.child("News").on("value",function(snap){
      if(snap.val()){
        setgetData(snap.val())
      }
      else{
        setgetData({})
      }
    })

  },[])
  
  function set(e){
    setData({...Data,[e.target.name]:e.target.value})

  }
  function Upload(){
    if(Data.Title!=="" &&  Data.Discription!==""){
      Fire.child("News").push(Data,function (err){
        if(err){
          console.log(
            err
          )
        }
        else{
          alert("Data saved")
        }
      })

    }
    else{
      alert("pls fill all the fields" )
    }
   
  }
  function Del(MainKey)
  {
    Fire.child("News").child(MainKey).remove()
    alert("Your Data is Deleted")
  }
  function Edit(mainkey){
    setid (mainkey)
    document.getElementById("Title").value=getData[mainkey].Title
    document.getElementById("Discription").value=getData[mainkey].Discription
    
  }

 
  function Update()
  {
    
   var title= document.getElementById("Title").value
   var dis= document.getElementById("Discription").value
   if(title=="" &&  dis=="")
    {
      alert("field is empty")
    }
    else{
    
     
      var obj={
        "Title":title,
        "Discription":dis,
      }
    
      Fire.child("News").child(id).set(obj,function(err){
        if(err){
          console.log(err)
        }
        else{
          alert("data updated")
          document.getElementById("Title").value=""
            document.getElementById("Discription").value=""
        }
      })
   }
  
  }
  return (
    
    <div>
    
      <AdminHeader/>
      <div className='Headnews'>
        <h2>NEWS TITLE:</h2>
        <input type='text' id='Title'  name='Title' placeholder='ENTER YOUR TITLE'  onChange={set} />
        <br/>
        <h2 className='dis'>NEWS DISCRIPTION :</h2>
        <textarea name='Discription'id='Discription' cols={40} rows={10}     placeholder='ENTER YOUR DISCRIPTION' onChange={set}/>
        <br/>
        <button className='btn' type='button' onClick={Upload}>Upload News</button>
        <button type='button' className='updateBtn' onClick={Update}>Update News</button>

      </div>
      <div>
        <table className='table' border={2}>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>TITLE</th>
              <th>DISCRIPTION</th>
              <th>OPERATION</th>
            </tr>

          </thead>
          <tbody>
            {
              Object.keys(getData).map(function(key,index){
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{getData[key].Title}</td>
                    <td>{getData[key].Discription}</td>
                    <td><button  onClick={()=>Del(key)}>Delete</button>
                    <button onClick={()=>Edit(key)}>Edit</button></td>
                   
                  </tr>

                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UploadNews
