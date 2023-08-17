import React from "react"
import "./styles/AddLoad.css"

function CurrentUser( props){


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

      </div>     
  )

}
export default React.memo( CurrentUser )