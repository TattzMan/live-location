import "../styles/Main.css"
import React from "react"
import  unlikedStar from "../../public/images/icons/grade_FILL0_wght400_GRAD0_opsz48.svg"
import likedstar from "../../public/images/icons/star_rate_black_24dp.svg"
import { db, auth } from "../config/fireBase";
import { collection, query, where, getDocs } from 'firebase/firestore';

function BulkTrailers(props){

  // const [loads, setLoads] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchLoads = async () => {
  //     try {
  //       if (auth.currentUser) {
  //         const userId = auth.currentUser.uid;

  //         const loadsQuery = query(collection(db, "Loads"), where("userId", "==", userId));
  //         const querySnapshot = await getDocs(loadsQuery);

  //         const loadedLoads = [];
  //         querySnapshot.forEach((doc) => {
  //           loadedLoads.push(doc.data());
  //         });

  //         setLoads(loadedLoads);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchLoads();
  // }, []);

  // console.log(loads);


  

  
  const starIcon = props.liked ? likedstar : unlikedStar   
  return(
    <div >
    <img src={props.item.imageUrl} className="truck-image"/>
    <div className="About" >
      <img src = {starIcon } className="star"  onClick={props.handleClick}/>
      <span>({props.item.rating}) </span>      
    </div>
    <h2 className="truck-name">{props.item.CompanyName} </h2>
      <p className="location"> From {props.item.fromLocation} to {props.item.toLocation} </p>
      <p>contact {props.item.contact}</p>
    </div>
  )
}
export default React.memo(BulkTrailers)

