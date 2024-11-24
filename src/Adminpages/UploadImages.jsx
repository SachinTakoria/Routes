import React, { useEffect, useState } from 'react'
import AdminHeader from "../Admincomponents/AdminHeader"

const UploadImages = () => {
  const [url,setUrl]=useState({})
  const [arr,setArr]=useState(JSON.parse(localStorage.getItem("key")

  ))
  function set(e){
 var file=e.target.files[0]
 var reader=new FileReader()
 reader.readAsDataURL(file)
 reader.onload=function(){
  setUrl(reader.result)
 }
  }
  function save(){
    setArr([...arr,url])

  }
  useEffect(function(){
    localStorage.setItem("key",JSON.stringify(arr))
  },[arr])

  function Del(index){
   var all= arr.filter(function(url,index){
    return index=index
    
   })
   setArr(all)
   alert("photo is deleted")
  }
  

  
  return (
    <div>
      <div>
        <AdminHeader/>
        <input type="file"  onChange={set}/><br />
        <button onClick={save}>Save</button>
        <table border={2}>
          <thead>
            <th>srno</th>
            <th>Images</th>
            <th>operation</th>

          </thead>
          <tbody>
            {
              arr.map(function(url,index){
                return(
                  <tr>
                    <td>{index}</td>
                    <td><img height={"150px"} width={"100px"} src={url} alt="" /></td>
                    <td><button onClick={Del}>Delete</button></td>
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

export default UploadImages
