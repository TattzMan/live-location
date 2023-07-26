import React from "react"
import {db} from "./config/fireBase"
import { collection, addDoc } from 'firebase/firestore';


function BulkTrailers(){

  const [addBulkTrailers , setAddBulkTrailers] = React.useState([])
  
  // specify the database to use
  const bulkTrailersDB = collection(db,"BulkTrailers")

  const [formDta , setFormData] = React.useState({
    CompanyName : "",
    onLoading : 6,
    onDelivery : 9,
    fromLocation : "",
    toLocation : ""
  })
    function handlechange(event){
      const {name , value} = event.target

      setFormData(prevFOrmData =>{

        return{
          ...prevFOrmData,
          [name] : value
        }
      })
    }

    const handleSubmit = async(event)=>{
      event.preventDefault()
      try{
        await addDoc(bulkTrailersDB ,{
          onDelivery :formDta.onDelivery,
          CompanyName : formDta.CompanyName,
          fromLocation : formDta.fromLocation,
          onLoading : formDta.onLoading,
          toLocation : formDta.toLocation
        })
      }catch(err){
        console.error(err)
      }
    }

  return(
    <form className="dropDown" onSubmit={handleSubmit}>

      <input
        placeholder="BulkTrailer"
        type="text"
        onChange={handlechange}
        name="CompanyName"
        value={formDta.CompanyName}
         />

         <input
        placeholder="loading ammount"
        type="number"
        onChange={handlechange}
        name="onLoading"
        value={formDta.onLoading}
        />

        <input
         placeholder="delivery ammount"
         type="number"
         onChange={handlechange}
         name="onDelivery"
         value={formDta.onDelivery}
         />

      <input
        placeholder="from location"
        type="text"
        onChange={handlechange}
        name="fromLocation"
        value={formDta.fromLocation}
         />

        <input
        placeholder="to location"
        type="text"
        onChange={handlechange}
        name="toLocation"
        value={formDta.toLocation}
          />
            <button>submit</button>
          </form>
  )
}
export default BulkTrailers