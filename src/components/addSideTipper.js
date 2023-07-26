import React from "react"
import { db } from "./config/fireBase"
import { collection , addDoc } from "firebase/firestore"

function SideTipper(){

const [formData , setFormData] = React.useState({
  CompanyName : "",
  onLoading : 6,
  onDelivery : 9,
  fromLocation : "",
  toLocation : ""
})

  function handleChange(event){
    const {name , value} = event.target
    setFormData(prevFormDaata =>{
      return{
        ...prevFormDaata,
        [name] : value
      }
    })
  } 
    // connect to data base
    const SideTipperDB = collection(db , "sideTippers")

  const handleSubmit = async(event)=>{
    event.preventDefault()
    try{

      await addDoc(SideTipperDB , {

        onDelivery :formData.onDelivery,
        CompanyName : formData.CompanyName,
        fromLocation : formData.fromLocation,
        onLoading : formData.onLoading,
        toLocation : formData.toLocation

      } )

    }catch(err){
      console.log(err)
    }
  }

  return(
    
    <form className="dropDown" onSubmit={handleSubmit}>

      <input
        placeholder="Side Tipper"
        onChange={handleChange}
        name="CompanyName"    
        value={formData.CompanyName}          
      />

        <input
        placeholder="loading ammount"  
        onChange={handleChange}              
        name="onLoading"
        value={formData.onLoading}
      />
      <input
        placeholder="delivery ammount"              
        onChange={handleChange}  
        name="onDelivery"   
        value={formData.onDelivery}         
      />
      <input
        placeholder="from location"              
        onChange={handleChange}   
        name="fromLocation" 
        value={formData.fromLocation}          
      />
      <input
        placeholder="to location"              
        onChange={handleChange}
        name="toLocation"   
        value={formData.toLocation}           
      />
      <button>submit</button>
    </form>
  )
}

export default SideTipper