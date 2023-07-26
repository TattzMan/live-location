import "../styles/Main.css"
import React from "react"

function BulkTrailers(props){

const starIcon = props.liked ? props.item.likedstar : props.item.notLikedStar
const rating = props.liked ? props.item.rating + 1 : props.item.rating 


  return(
      <div >

      <img src={props.item.img} className="truck-image"/>

      <div className="About" >
        <img src = {starIcon } className="star" onClick={props.handleClick} />
        <span>{ rating} </span>
        
      </div>
      <h2 className="truck-name">{props.item.name} </h2>

         <p className="price">On loading $ <span>{props.item.price.loading}</span> 
         On Delivery  $<span>{props.item.price.Delivery}</span> </p>

        <p className="location"> From {props.item.locationFrom} to {props.item.locationTo} </p>

      </div>
)
}


 


export default React.memo(BulkTrailers)

