import React from "react";

function MiniLoad(props){

  return(
    <div className='frontloadDisplay'>
          <h3>Comapny name {props.item.companyName} </h3>
        <p>Type of load :{props.item.typeofLoad} </p>
        <p>Contact : {props.item.contact}</p>
        <p>From {props.item.fromLocation} to {props.item.toLocation}</p>
        <p>Rate {props.item.ratePerTonne} per tonne</p>
        <p> Payment terms : {props.item.paymentTerms}</p>
        <p>Requirements {props.item.requirements}</p>
        <p>Additional info {props.item.additionalInfo} </p> 
    </div>
  )
}
export default MiniLoad