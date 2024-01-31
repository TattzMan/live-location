import React from "react"
import "./styles/AddLoad.css"

function AddLoad( props){
  const styles = {
    backgroundColor : props.backgroundColor
  }
  return(
    <div className="bigLoad" style={styles} >

    
      {/*   the props.item .....  checks if an elemnt has something to dispaly bfr dispaling it t it have t will apear if notit will not we are getting props from things by user element and importing css from addload a file  the loads are taken from the app were there are passed as props   */}

      { props.item.companyName && (<h3 className="companyName">{props.item.companyName}</h3>)}
        
      {props.item.contact && ( <p className="contact">CONTACT: <span className="spaninMini"> {props.item.contact}</span></p>)}

      { props.item.typeofLoad && (<p className="loadType">TYPE of LOAD: <span className="spaninMini">  {props.item.typeofLoad}</span></p>)} 

      {props.item.fromLocation && (<p className="location">FROM: <span className="spaninMini">{props.item.fromLocation}</span> TO <span className="spaninMini">{props.item.toLocation}</span></p> )}

      { props.item.ratePerTonne && ( <p className="rate">RATE: <span className="spaninMini">  {props.item.ratePerTonne}</span></p> ) }

      { props.item.DueDate && (   <p className="dueDate">DUE DATE: <span className="spaninMini"> {props.item.DueDate} </span> </p> ) }

      {props.item.requirements && (<p className="requirements">REQUIREMENTS: <span className="spaninMini">{props.item.requirements} </span> </p> )}

        {props.item.additionalInfo && ( <p className="additionalInfo">ADDITIONAL INFO: <span className="spaninMini"> {props.item.additionalInfo} </span></p>     )}             

      </div>     
  )
}
export default React.memo( AddLoad)