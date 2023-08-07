import React from "react";

function MiniLoad(props){
  
// click a div 
// find its id
// if clicked div === id
// display big div
// with the same info
// 


  return(
    <div className='frontloadDisplay' onClick={props.handleClick}>
        <h3>Company name <span className="spaninMini">{props.item.companyName}</span> </h3>
        <p>Type of load : <span className="spaninMini">{props.item.typeofLoad}</span> </p>
        <p>Contact : <span className="spaninMini">{props.item.contact}</span></p>
        <p>From <span className="spaninMini">{props.item.fromLocation}</span> to <span className="spaninMini">{props.item.toLocation}</span></p>
        <p>Rate <span className="spaninMini">{props.item.ratePerTonne}</span> per tonne</p>
        <p> Payment terms : <span className="spaninMini">{props.item.paymentTerms}</span></p>
        <p>Requirements <span className="spaninMini">{props.item.requirements}</span></p>
        <p>Additional info <span className="spaninMini"> {props.item.additionalInfo}</span> </p> 
    </div>
  )
}
export default MiniLoad