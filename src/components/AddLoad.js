import React from "react"
import "./styles/AddLoad.css"

function AddLoad( props){
  const styles = {
    backgroundColor : props.backgroundColor
  }

  return(
    <div className="bigLoad" style={styles} >
        <h3>Company {props.item.companyName} </h3>
        <p>type of load {props.item.typeofLoad} </p>
        <p>contact {props.item.contact} </p>
        <p>from {props.item.fromLocation} to {props.item.toLocation} </p>
        <p>Rate {props.item.ratePerTonne} per tonne</p>
        <p> payment terms {props.item.paymentTerms} </p>
        <p>Requirements {props.item.requirements} </p>
        <p>additional info {props.item.additionalInfo} </p>

           

      </div>     
  )

}
export default React.memo( AddLoad)