import React from "react";

function MiniLoad(props){

  return(
    <div className='frontloadDisplay'>
          <h3>Comapny name {props.item.companyName} </h3>
        <p>Contact : 0787884434</p>
        <p>Type of load :coal </p>
        <p>From Harare to kadoma</p>
        <p>Rate 50 per tonne</p>
        <p> Payment terms</p>
        <p>Requirements</p>
        <p>Additional info </p> 
    </div>
  )
}
export default MiniLoad