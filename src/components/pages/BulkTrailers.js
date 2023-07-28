import "../styles/Main.css"
import React from "react"
import  unlikedStar from "../../public/images/icons/grade_FILL0_wght400_GRAD0_opsz48.svg"
import likedstar from "../../public/images/icons/star_rate_black_24dp.svg"

function BulkTrailers(props){

  console.log(props.liked)
  const starIcon = props.liked ? likedstar : unlikedStar 

  return(
    <div >

    <img src={props.item.imageUrl} className="truck-image"/>

    <div className="About" >
      <img src = {starIcon } className="star"  onClick={props.handleClick}/>
      <span>({props.item.rating}) </span>
      
    </div>
    <h2 className="truck-name">{props.item.CompanyName} </h2>

       <p className="price"> On loading $ <span>{props.item.onLoading}</span> 
       On Delivery  $<span>{props.item.onDelivery}</span> </p>

      <p className="location"> From {props.item.fromLocation} to {props.item.toLocation} </p>
      <p>contact : {props.item.contact}</p>

    </div>
  )
}


 


export default React.memo(BulkTrailers)

