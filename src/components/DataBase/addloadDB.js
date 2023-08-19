import React from "react";
import { db, auth } from "../config/fireBase";
import { collection, doc, getDoc, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function AddLoadDB() {
  const loadsCollection = collection(db, "Loads");

  const [formData, setFormData] = React.useState({
    typeofLoad: "",
    contact: "",
    fromLocation: "",
    toLocation: "",
    ratePerTonne: "",
    paymentTerms: "",
    requirements: "",
    additionalInfo: "",
    backgroundColor: ""
  });

  function handleTypedText(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      };
    });
  }
  
  const [ username , setUsername] = React.useState('');

  React.useEffect(() => {
    const fetchBio = async () => {
      try {
        if (auth.currentUser) {
          const userId = auth.currentUser.uid;

          const docRef = doc(db, 'usernames', userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUsername(docSnap.data().username);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchBio();
  }, []);
  
  const [userId, setUserId] = React.useState('');

  React.useEffect(() => {
    const fetchUserId = async () => {
      try {
        if (auth.currentUser) {
          setUserId(auth.currentUser.uid);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserId();
  }, []);

  const delID = uuidv4();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(loadsCollection, {
        userId: userId, // Add the user ID to the document
        delID : delID ,
        companyName: username,
        typeofLoad: formData.typeofLoad,
        contact: formData.contact,
        fromLocation: formData.fromLocation,
        toLocation: formData.toLocation,
        ratePerTonne: formData.ratePerTonne,
        paymentTerms: formData.paymentTerms,
        requirements: formData.requirements,
        additionalInfo: formData.additionalInfo,
        backgroundColor: formData.backgroundColor
      });

      setFormData({
        companyName: "",
        typeofLoad: "",
        contact: "",
        fromLocation: "",
        toLocation: "",
        ratePerTonne: "",
        paymentTerms: "",
        requirements: "",
        additionalInfo: "",
        backgroundColor: ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="dropDown" onSubmit={handleSubmit}>

  <input
    placeholder="type of load"
    onChange={handleTypedText}
    name="typeofLoad"
    value={formData.typeofLoad}
  />

  <input 
    placeholder="contact"
    onChange={handleTypedText}
    name="contact"
    value={formData.contact}
  />

  <input 
    placeholder="from loacation"
    onChange={handleTypedText}
    name="fromLocation"
    value={formData.fromLocation}
  />
  <input 
    placeholder="to location"        
    onChange={handleTypedText}
    name="toLocation"
    value={formData.toLocation}
  />
  <input 
    placeholder="rate per tonne"
    onChange={handleTypedText}
    name="ratePerTonne"
    value={formData.ratePerTonne}
    type="text"
  />

  <input
    placeholder="payment terms"
    onChange={handleTypedText}
    name="paymentTerms"
    value={formData.paymentTerms}
  />
  <input 
    placeholder="requirements"
    onChange={handleTypedText}
    name="requirements"
    value={formData.requirements}
  />

  <input 
    placeholder="Any additional info"
    onChange={handleTypedText}
    name="additionalInfo"
    value={formData.additionalInfo}
  />
  <button>submit</button>

</form>
  );
}


export default AddLoadDB;