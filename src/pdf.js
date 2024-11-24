import React, { useEffect, useState } from 'react'
import AdminHeader from '../Admincomponents/AdminHeader'
import Fire from "../Fire"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import JSPDF from "jspdf"
const Uploadcontact = () => {
    const [obj,SetObj]=useState({})
    const [Data,SetData]=useState({})
    const [Data1,SetData1]=useState({})
    function set(event)
    {
     SetObj({...obj,[event.target.name]:event.target.value})
     }
     function save()
     {
        Fire.child("contact").push(obj)
        alert("data saved successfully")
        document.getElementById("title").value=""
        document.getElementById("discription").value=""
     }
     useEffect(function(){
        Fire.child("contact").on("value",function(snap){
            if(snap.val()){
                SetData(snap.val())
                SetData1(snap.val())
            }
            else{
                SetData({})
                SetData1({})
            }
        })
     },[])
     function search(event){
       if(event.target.value=="")
       {
        SetData(Data1)
       }
       else{
        var obj={}
        Object.keys(Data1).map(function(key)
        {
            if(Data1[key].Title.match(event.target.value) || Data1[key].Discription.match(event.target.value))
            {
                obj[key]=Data1[key]
            }
        })
        SetData(obj)
       }
     }
    async function Export()
     {
      var table=  document.getElementById("table")
      var report= new JSPDF('landscape',"px",[1000,1000])
        await report.html(table)
        report.save("Data.pdf")
     }
  return (
    <div>
        <AdminHeader/>
        <div className='inputBox'>
            <input type="text" id='title' name='Title' placeholder='enter name' onChange={set} /><br /><br />
            <input type="text" id='discription' name='Discription' placeholder='enter discription' onChange={set} /><br />
            <button type='button' id='contactBtn' onClick={save} >Save</button>
        </div>
        <div>
        <button onClick={Export}>Export to PDF</button>

        <ReactHTMLTableToExcel
                    className="excelbtn"
                    table="tablexls"
                    filename="Data"
                    sheet="Record"
                    buttonText="Export to Excel"/>
            <input className='searchBtn' type="text" onChange={search} placeholder='search by name or phone' />      
           <div id="table" style={{position:"absolute",top:"300px",left:"500px"}}>
           <table id='tablexls' className='contactTable' border={2}>
                <thead>
                    <tr>
                        <th>sr.no</th>
                        <th>Name</th>
                        <th>Discription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(Data).map(function(key,index){
                            return(
                                <tr key={key}>
                                    <td>{index+1}</td>
                                    <td>{Data[key].Title?Data[key].Title:""}</td>
                                    <td>{Data[key].Discription?Data[key].Discription:""}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
           </div>
        </div>   
    </div>
  )
}

export default Uploadcontact