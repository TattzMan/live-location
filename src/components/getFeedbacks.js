import React, { useState, useEffect } from "react";
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../components/config/fireBase";

function GetFeedback() {
  const FeedbackDB = collection(db, "feedback");
  const [feedback, setFeedback] = useState([]);

  const getFeedBack = async () => {
    try {
      const data = await getDocs(FeedbackDB);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setFeedback(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeedBack();
  }, []);

  console.log(feedback);

  // usability : usability ,
  // keyFeatures : keyFeatures ,
  // improvements : improvements, 
  // competitorComparison: competitorComparison ,
  // callToAction : callToAction , 
  // selectedRating : selectedRating 

  return (
    <div >
      <div className="mainGridGetFeedBack">
      {
        feedback.map(item=>(
          <div className="bigLoad" key={item.id}>
            <p> {item.usability} </p>
            <p>{item.keyFeatures}</p>
            <p> {item.improvements } </p>
            <p> {item.competitorComparison} </p>
            <p> {item.callToAction} </p>
            <p>  {item.selectedRating} </p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default GetFeedback;
