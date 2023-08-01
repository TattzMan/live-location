import React from "react"
import "./styles/AddLoad.css"
import MiniLoad from "./miniLoads"

function AddLoad( props){
  let [swichBetwnLoad , setstate] = React.useState(true)
  
  function togglestateLoad(){
    setstate(prevState => !prevState)
  }



  return(
    <div className="bigLoad">
        <h1 >Comapny {props.item.companyName} </h1>
        <h1>type of load {props.item.typeofLoad} </h1>
        <h3>contact {props.item.contact} </h3>
        <h3>from {props.item.fromLocation} to {props.item.toLocation} </h3>
        <h3>Rate {props.item.ratePerTonne} per tonne</h3>
        <h3> payment terms {props.item.paymentTerms} </h3>
        <h3>Requirements {props.item.requirements} </h3>
        <p>additional info {props.item.additionalInfo} </p>

           

      </div>     
  )

}
export default React.memo( AddLoad)