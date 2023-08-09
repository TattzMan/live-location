import React from "react";
import { db, auth } from "../config/fireBase";
import { collection, query, where, getDocs } from 'firebase/firestore';

const [userLoads, setUserLoads] = React.useState({});
  
  React.useEffect(() => {
    const fetchLoads = async () => {
      try {
        const loadsQuery = query(collection(db, "Loads"));
        const querySnapshot = await getDocs(loadsQuery);

        const loadedUserLoads = {};

        querySnapshot.forEach((doc) => {
          const loadData = doc.data();
          const userId = loadData.userId;
          
          if (!loadedUserLoads[userId]) {
            loadedUserLoads[userId] = [];
          }
          
          loadedUserLoads[userId].push(loadData);
        });

        setUserLoads(loadedUserLoads);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLoads();
  }, []);

  console.log(userLoads);

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