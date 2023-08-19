import React from "react"
import "./styles/AddLoad.css"
import {deleteDoc , doc} from "firebase/firestore"
import { db } from './config/fireBase'


function CurrentUser( props){

  const deleteLoad = async (id) => {
    console.log(id);
    const loadsDocRef = doc(db, 'Loads' , id);
    await deleteDoc(loadsDocRef);
  };

  return(
    <div className="bigLoad"  >
        <h3>Company {props.item.companyName} </h3>
        <p>Contact : <span className="spaninMini">{props.item.contact}</span></p>
        <p>type of load {props.item.typeofLoad} </p>
        <p>from {props.item.fromLocation} to {props.item.toLocation} </p>
        <p>Rate {props.item.ratePerTonne} </p>
        <p> payment terms {props.item.paymentTerms} </p>
        <p>Requirements {props.item.requirements} </p>
        <p>additional info {props.item.additionalInfo} </p>    
        <button onClick={()=>deleteLoad(props.item.id)}>Delete</button>    
      </div>     
  )

}
export default React.memo( CurrentUser )