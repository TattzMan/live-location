import React from "react";

function MiniLoad(props){
  return(
    <div className='frontloadDisplay' onClick={props.handleClick}>
        <h3>Company name <span className="spaninMini">{props.item.companyName}</span> </h3>
        <p>Type of load : <span className="spaninMini">{props.item.typeofLoad}</span> </p>
        <p>From <span className="spaninMini">{props.item.fromLocation}</span> to <span className="spaninMini">{props.item.toLocation}</span></p>
        <p>Rate <span className="spaninMini">{props.item.ratePerTonne}</span> </p>
        
    </div>
  )
}
export default MiniLoad