import React from "react";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { db } from "../config/fireBase";

function AddLoadDB() {
  const loadsCollection = collection(db, "Loads");

  const [formData, setFormData] = React.useState({
    companyName: "",
    typeofLoad: "",
    contact: "",
    fromLocation: "",
    toLocation: "",
    ratePerTonne: '',
    paymentTerms: "",
    requirements: "",
    additionalInfo: ""
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



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(loadsCollection, {
        companyName: formData.companyName,
        typeofLoad: formData.typeofLoad,
        contact: formData.contact,
        fromLocation: formData.fromLocation,
        toLocation: formData.toLocation,
        ratePerTonne: formData.ratePerTonne,
        paymentTerms: formData.paymentTerms,
        requirements: formData.requirements,
        additionalInfo: formData.additionalInfo
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="dropDown" onSubmit={handleSubmit}>
      <input
    placeholder="company name"
    onChange={handleTypedText}
    name="companyName"
    value={formData.companyName}
  />

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