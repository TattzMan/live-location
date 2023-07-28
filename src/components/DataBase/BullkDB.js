
import React from "react";





// import { db } from "../config/fireBase"
// import { collection, getDocs , doc} from "firebase/firestore"


// function BulkTrailersData2(){
//   const BulkTrailersDB = collection(db , "BulkTrailers")
//   const [weed2 , setweed] = React.useState([])

//   React.useEffect(()=>{
  
//     const getBulktrailers = async()=>{
//       // read data 
//       // set movieList 
//       try{
//         const data = await getDocs(BulkTrailersDB)
//         const filteredData = data.docs.map((doc)=>({
//           ...doc.data(),
//           id : doc.id
//         }))
//         setweed(filteredData)
//       }catch(err){
//         console.error(err)
//       }
//     }
//     getBulktrailers()
//   }, [])

//   return weed2
// }
//  export default BulkTrailersData2