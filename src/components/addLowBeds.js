import React from "react"
import {db } from "./config/fireBase"
import { collection, addDoc } from 'firebase/firestore';
import { storage } from "./config/fireBase";
import {getDownloadURL, ref , uploadBytes} from "firebase/storage"
import {v4} from "uuid"

function LowBeds(){

  
  // specify the database to use
  const LowBedsDB = collection(db,"LowBeds")

  const [formDta , setFormData] = React.useState({
    CompanyName : "",
    onLoading : 6,
    onDelivery : 9,
    fromLocation : "",
    toLocation : "",
    like : false,
    rating : 0,
    contact : ''
  })

    function handlechange(event){
      const {name , value } = event.target

      setFormData(prevFOrmData =>{

        return{
          ...prevFOrmData,
          [name]  : value 
        }
      })
    }
    const [ imageUpload, setImageUpload] = React.useState(null)    

    const uploadImage = ()=>{
      if(imageUpload === null) return
      const imageRef = ref(storage , `LowBeds/${imageUpload.name + v4() }`)
      uploadBytes(imageRef , imageUpload).then(()=>{
        alert("image uploaded")
      })
    }

    const handleSubmit = async(event)=>{
      event.preventDefault()
      const imageRef = ref(storage , `LowBeds/${imageUpload.name}`)
       await uploadBytes(imageRef , imageUpload)
       // get image  url 
       let imageUrl = await getDownloadURL(imageRef)

      try{
        await addDoc(LowBedsDB ,{
          onDelivery :formDta.onDelivery,
          CompanyName : formDta.CompanyName,
          fromLocation : formDta.fromLocation,
          onLoading : formDta.onLoading,
          toLocation : formDta.toLocation,
          like : formDta.like,
          rating : formDta.rating,
          contact : formDta.contact,
          imageUrl : imageUrl
        })
      }catch(err){
        console.error(err)
      }
    }
    


  return(
    <form className="dropDown" onSubmit={handleSubmit}>

      <input
      type="file"
      onChange={(e)=>{setImageUpload(e.target.files[0])}}
      />

      <input
        placeholder="LowBed"
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
          <input
            placeholder="Contact"
            type="text"
            onChange={handlechange}
            name="contact"
            value={formDta.contact}
          />
            <button onClick={uploadImage} >submit</button>
          </form>
  )
}
export default LowBeds