import React, { useState } from 'react';
// get rating feature from material ui and use it for the stars fr ratung 
import Rating from "@mui/material/Rating";
import {db } from "./config/fireBase"
import { collection , addDoc } from "firebase/firestore"


  
function Feedback() {

const [improvements, setImprovements] = useState('');
const [selectedRating, setSelectedRating] = React.useState(null);

const handleRatingSelect = (event, rating) => {
  setSelectedRating(rating);
};



const Feedback = collection(db,"feedback")


const handleSubmit =  async(event)=>{
  event.preventDefault();

  // Handle the form submission
  // You can perform actions like sending the feedback data to a server

  try{
    await addDoc(Feedback , {
      selectedRating : selectedRating ,
      improvements : improvements
    })
    }catch(err){
      console.error(err)
    }

  // Reset form fields
  setSelectedRating('')
};



return (
  <form onSubmit={handleSubmit}   >
    <h2>Lets build the site togather </h2>    
 
    <p>Select your rating:</p>

    {/* create the stars for rating we got them form material ui it have an item for rating which make it easy for use to create a rating feature  */}
    <Rating
      name="feedback-rating"
      value={selectedRating}
      onChange={handleRatingSelect}
    />
<br/>
    <label>
      <p> Areas for improvement: What aspects of our website do you think could be improved? </p>
      
      <br/>

      <textarea
        name="improvements"
        value={improvements}
        onChange={(event) => setImprovements(event.target.value)}
      />

    </label>
    <br/>    
  
          <button type="submit">Submit</button>
        

  </form>
);
}

export default Feedback;                                                                                                         
