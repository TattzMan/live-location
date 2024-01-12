import React, { useState } from 'react';
// get rating feature from material ui and use it for the stars fr ratung 
import Rating from "@mui/material/Rating";
import {db } from "./config/fireBase"
import {getDocs , collection , addDoc , deleteDoc, doc} from "firebase/firestore"


  
function Feedback() {

  const [feedback , setFeedback] = React.useState([])

  const getFeedback = async()=>{
    //read the data
    // set the movie list
    try {
      const data = await getDocs(Feedback)
    const filteredData = data.docs.map((doc)=> ({
      ...doc.data(),
      id : doc.id      
    }))
    setFeedback(filteredData)
    }catch(err){
      console.error(err)  
    }
    }

    React.useEffect(()=>{
      getFeedback()
    }, [])

    console.log(feedback)

const [usability, setUsability] = useState('');
const [keyFeatures, setKeyFeatures] = useState([]);
const [improvements, setImprovements] = useState('');
const [competitorComparison, setCompetitorComparison] = useState(0);
const [callToAction, setCallToAction] = useState('');
const [additionalFeedback, setAdditionalFeedback] = useState('');
const [selectedRating, setSelectedRating] = React.useState(null);

const handleRatingSelect = (event, rating) => {
  setSelectedRating(rating);
};

const handleKeyFeaturesChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    setKeyFeatures((prevKeyFeatures) => [...prevKeyFeatures, value]);
  } else {
    setKeyFeatures((prevKeyFeatures) =>
      prevKeyFeatures.filter((feature) => feature !== value)
    );
  }
};

const Feedback = collection(db,"feedback")


const handleSubmit =  async(event)=>{
  event.preventDefault();

  // Handle the form submission
  // You can perform actions like sending the feedback data to a server

  try{
    await addDoc(Feedback , {
      usability : usability ,
      keyFeatures : keyFeatures ,
      improvements : improvements, 
      competitorComparison: competitorComparison ,
      callToAction : callToAction , 
      selectedRating : selectedRating 
    })
    getFeedback()
    }catch(err){
      console.error(err)
    }

  // Reset form fields
  setUsability('');
  setKeyFeatures([]);
  setImprovements('');
  setCompetitorComparison(0);
  setCallToAction('');
  setAdditionalFeedback('');
  setSelectedRating('')
};

// const onsubmitMovie = async()=>{
//   try{
//   await addDoc(moviesCOllection , {
//     recievedAndOscar : isNewOscar ,
//     releaseDate : newReleaseDate ,
//     tittle : newmovieTittle, 
//     userID : auth?.currentUser?.uid
//   })
//   getMovieList()
//   }catch(err){
//     console.error(err)
//   }
  
// }

return (
  <form onSubmit={handleSubmit}   >
    <h2>Lets build the site togather </h2>

    <label>
      Website usability: Did you find our website easy to navigate and use? (Yes/No)
      <br/>
      <input

        type="radio"
        name="usability"
        value="Yes"
        checked={usability === 'Yes'}
        onChange={(event) => setUsability(event.target.value)}
      />
      Yes
      <br/>

      <input
        type="radio"
        name="usability"
        value="No"
        checked={usability === 'No'}
        onChange={(event) => setUsability(event.target.value)}
      />
      No
      <br/>
      <br/>
 
    </label>

    <label>
      Key features evaluation: Which features or functionalities do you find most useful on our website? 
      <br />
      <input
        type="checkbox"
        name="keyFeatures"
        value="the structure of the whole website"
        checked={keyFeatures.includes('the structure of the whole website')}
        onChange={handleKeyFeaturesChange}
      />
          the structure of the whole website  
      <br />
      <input
        type="checkbox"
        name="keyFeatures"
        value="the search option to easy find loads"
        checked={keyFeatures.includes('the search option to easy find loads')}
        onChange={handleKeyFeaturesChange}
        />
      
        the search option to easy find loads
      <br />
      <input
        type="checkbox"
        name="keyFeatures"
        value="markerting of trucks and loads on front page"
        checked={keyFeatures.includes('markerting of trucks and loads on front page')}
        onChange={handleKeyFeaturesChange}
        />
      markerting of trucks and loads on front page 

    </label>
    <br/>

    <label>
      Areas for improvement: What aspects of our website do you think could be improved? 
      <textarea
        name="improvements"
        value={improvements}
        onChange={(event) => setImprovements(event.target.value)}
      />
    </label>
    <br/>

    <label>
      Competitor comparison: How does our website compare to competitors in terms of user experience? (Rating scale)
 
         <Rating
         name="feedback-rating"
         value={competitorComparison}
         onChange={(event) => setCompetitorComparison(parseInt(event.target.value))}
       />
    </label>
    <br/>

    <label>
      Call-to-action evaluation: Did you find our call-to-action buttons and prompts clear and compelling? 
      <input
        type="radio"
        name="callToAction"
        value="Yes"
        checked={callToAction === 'Yes'}
        onChange={(event) => setCallToAction(event.target.value)}
      />
      <br/>

      Yes
      <input
        type="radio"
        name="callToAction"
        value="No"
        checked={callToAction === 'No'}
        onChange={(event) => setCallToAction(event.target.value)}
      />
      No
      <br/>

    </label>

    <label>
      Additional feedback: Is there anything else you would like to share about your experience with our website? 
      <br/>

      <textarea
        name="additionalFeedback"
        value={additionalFeedback}
        onChange={(event) => setAdditionalFeedback(event.target.value)}
      />
    </label>

    
    <p>Select your rating:</p>

      {/* create the stars for rating we got them form material ui it have an item for rating which make it easy for use to create a rating feature  */}
       <Rating
         name="feedback-rating"
         value={selectedRating}
         onChange={handleRatingSelect}
       />
          <button type="submit">Submit</button>
        {
          feedback.map((item)=>(
            <div>
              <p> {item.usability} </p>
              <p> {item.improvements} </p>
            </div>
          ))
        }


  </form>
);





}

export default Feedback;                                                                                                         
