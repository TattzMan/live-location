import React, { useState } from 'react';
// get rating feature from material ui and use it for the stars fr ratung 
import Rating from "@mui/material/Rating";
import {db } from "./config/fireBase"
import { collection , addDoc } from "firebase/firestore"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

  
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
  setImprovements('')
};

 

return (
  <form onSubmit={handleSubmit}   >

      <div className='topSendFB'>
    <p>Select your rating:</p>

    {/* create the stars for rating we got them form material ui it have an item for rating which make it easy for use to create a rating feature  */}
    <Rating
      name="feedback-rating"
      value={selectedRating}
      onChange={handleRatingSelect}
    />
    </div>
    <div className='middleSendFB'>
      <p>Help us serve you better. Share your feedback.</p>
      {improvements}
    </div>
    <div className='belowSendFB'>

      <input
        placeholder='TYpe your message'
        name="improvements"
        value={improvements}
        onChange={(event) => setImprovements(event.target.value)}
      />  
          <button type="submit"> <ArrowForwardIcon/>  </button>
          </div>        

  </form>
);
}

export default Feedback;                                                                                                         
