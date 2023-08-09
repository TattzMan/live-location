import React, { useState, useEffect } from 'react';
import Auth from './components/auth'  
import Username from './components/username';
import "./App.css"
import Header from "./components/Header";
import AddLoad from "./components/AddLoad";

import SideBar from "./components/SideBar";
import SideBarData from "./components/SideBarData";

import Tankers from "./components/pages/Tankers";

import LowBeds from "./components/pages/LowBeds";

import BulkTrailers from "./components/pages/BulkTrailers";

import SideTippers from "./components/pages/SideTippers";

import Tauntliners from "./components/pages/Taultliner";

import { auth, db, storage } from "./components/config/fireBase"
import { collection, getDocs , doc ,updateDoc} from "firebase/firestore"
import MiniLoad from './components/miniLoads';
require('events').EventEmitter.defaultMaxListeners = 15;




function App(){  

  const [currentUser , setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  
  let [sideBarNames , setSideBarName] = React.useState(SideBarData)
  
  
  
  const BulkTrailersDB = collection(db , "BulkTrailers")
  const [BulkTrailer , setBulkTrailer] = React.useState([])

  const getBulktrailers = async()=>{
    //read data 
    //set movieList 
    try{
      const data = await getDocs(BulkTrailersDB)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id : doc.id,
      }))

      setBulkTrailer(filteredData)
    }catch(err){
      console.error(err)
    }
  }
    
  
  React.useEffect(()=>{
    getBulktrailers()
  }, [])

    
  const LowBedsDB = collection(db , "LowBeds")
  let [ LowBed , setLowBeds] = React.useState([])

  const getLoBeds= async()=>{
    //read data 
    //set movieList 
    try{
      const data = await getDocs(LowBedsDB)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id : doc.id,

      }))

      setLowBeds(filteredData)
    }catch(err){
      console.error(err)
    }
  }
    
  
  React.useEffect(()=>{
    getLoBeds()
  }, [])

      
  const SideTipperDB = collection(db , "sideTippers")
  let [ SideTipper , setSideTipper] = React.useState([])

  const getSideTippers= async()=>{
    //read data 
    //set movieList 
    try{
      const data = await getDocs(SideTipperDB)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id : doc.id,
      }))

      setSideTipper(filteredData)
    }catch(err){
      console.error(err)
    }
  }
    
  
  React.useEffect(()=>{
    getSideTippers()
  }, [])

        
  const TankersDB = collection(db , "tankers")
  let [ tankers , setTanker] = React.useState([])

  const getTankers= async()=>{
    //read data 
    //set movieList 
    try{
      const data = await getDocs(TankersDB)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id : doc.id,
      }))

      setTanker(filteredData)
    }catch(err){
      console.error(err)
    }
  }
  React.useEffect(()=>{
    getTankers()
  }, [])

  const TaultlinerDB = collection(db , "tauntliner")
  let [ Taultliner , setTautliner] = React.useState([])

  const getTauntliner= async()=>{
    //read data 
    //set movieList 
    try{
      const data = await getDocs(TaultlinerDB)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id : doc.id,
      }))

      setTautliner(filteredData)
    }catch(err){
      console.error(err)
    }
  }
    
  
  React.useEffect(()=>{
    getTauntliner()
  }, [])

  function toggleSideBar (id){

    setSideBarName(prevName => {
      return prevName.map( oneName =>{
        return oneName.id === id ? {...oneName , state : true } : {...oneName , state : false}
             
      })
  })

  }

  function toggleTanker(id) {
    setTanker(prevTruck => {
      return prevTruck.map(oneTruck => {
        if (oneTruck.id === id) {
          const newLikeStatus = !oneTruck.like;
          const newRating = oneTruck.like ? oneTruck.rating - 1 : oneTruck.rating + 1;
          const docRef = doc(collection(db, "tankers"), id);
        updateDoc(docRef, {
            like: newLikeStatus,
            rating: newRating
          })
         
          return {
            ...oneTruck,
            like: newLikeStatus,
            rating: newRating
          };
        } else {
          return oneTruck;
        }
      });
    });
  }

  function toggleLowBed(id) {
    setLowBeds(prevTruck => {
      return prevTruck.map(oneTruck => {
        if (oneTruck.id === id) {
          const newLikeStatus = !oneTruck.like;
          const newRating = oneTruck.like ? oneTruck.rating - 1 : oneTruck.rating + 1;
          const docRef = doc(collection(db, "LowBeds"), id);
          updateDoc(docRef, {
            like: newLikeStatus,
            rating: newRating
          })
         
          return {
            ...oneTruck,
            like: newLikeStatus,
            rating: newRating
          };
        } else {
          return oneTruck;
        }
      });
    });
  }
  // function toggleBulkTrailer (id){
  //   setBulkTrailer(prevTruck => {
  //     return prevTruck.map( oneTruck =>{
  //       return oneTruck.id === id ? {...oneTruck , like : !oneTruck.like } : oneTruck
                
  //     })
  //   })
  // }


  function toggleBulkTrailer(id) {
    setBulkTrailer(prevTruck => {
      return prevTruck.map(oneTruck => {
        if (oneTruck.id === id) {
          const newLikeStatus = !oneTruck.like;
          const newRating = oneTruck.like ? oneTruck.rating - 1 : oneTruck.rating + 1;
          const docRef = doc(collection(db, "BulkTrailers"), id);
          updateDoc(docRef, {
            like: newLikeStatus,
            rating: newRating
          })
         
          return {
            ...oneTruck,
            like: newLikeStatus,
            rating: newRating
          };
        } else {
          return oneTruck;
        }
      });
    });
  }

  function toggleSideTipper(id) {
    setSideTipper(prevTruck => {
      return prevTruck.map(oneTruck => {
        if (oneTruck.id === id) {
          const newLikeStatus = !oneTruck.like;
          const newRating = oneTruck.like ? oneTruck.rating - 1 : oneTruck.rating + 1;
          const docRef = doc(collection(db, "sideTippers"), id);
          updateDoc(docRef, {
            like: newLikeStatus,
            rating: newRating
          })
         
          return {
            ...oneTruck,
            like: newLikeStatus,
            rating: newRating
          };
        } else {
          return oneTruck;
        }
      });
    });
  }

    function toggleTautliner(id) {
      setTautliner(prevTruck => {
        return prevTruck.map(oneTruck => {
          if (oneTruck.id === id) {
            const newLikeStatus = !oneTruck.like;
            const newRating = oneTruck.like ? oneTruck.rating - 1 : oneTruck.rating + 1;
            const docRef = doc(collection(db, "tauntliner"), id);
            updateDoc(docRef, {
              like: newLikeStatus,
              rating: newRating
            })
          
            return {
              ...oneTruck,
              like: newLikeStatus,
              rating: newRating
            };
          } else {
            return oneTruck;
          }
        });
      });
    }


    
    let trucks 

    const sideBarName = sideBarNames.map(oneName =>{
      
      
      {
        if (oneName.id === 1 && oneName.state === true){
          
 
           trucks = BulkTrailer.map(truck =>{ 
            return(
              < BulkTrailers
            liked = {truck.like }
            key = {truck.id}
            item = {truck}
            handleClick = {()=> toggleBulkTrailer(truck.id)}
            />     
          
            )
          })
          }    
          
           if (oneName.id === 3 && oneName.state === true){
            trucks = LowBed.map(truck =>{      
              
              return(
                <LowBeds
                liked = {truck.like}
                key = {truck.id}
                item = {truck}
                handleClick = {()=> toggleLowBed(truck.id)}
                />     
                
                )})                
              }
              else if (oneName.id === 4 && oneName.state === true){
                
                trucks = tankers.map(truck =>{      
                  
                  return(
                    <Tankers
                    liked = {truck.like}
                    key = {truck.id}
                    item = {truck}
                    handleClick = {()=> toggleTanker(truck.id)}
                    />     
                   )                  
              } )         
        }
        else if (oneName.id === 2 && oneName.state === true){
              
          trucks = SideTipper.map(truck =>{      
            
            return(
              <SideTippers
              liked = {truck.like}
              key = {truck.id}
              item = {truck}
              handleClick = {()=> toggleSideTipper(truck.id)}
              />     
               )                  
          } )         
      }
      else if (oneName.id === 5 && oneName.state === true){
              
        trucks = Taultliner.map(truck =>{      
          
          return(
            <Tauntliners
            liked = {truck.on}
            key = {truck.id}
            item = {truck}
            handleClick = {()=> toggleTautliner(truck.id)}
            />     
             )                  
        } )         
      }
      }         
      
        return (      
    
          <SideBar 
            key = {oneName.id}
            item = {oneName}
            handleClick = {() => toggleSideBar(oneName.id)}
          />
        )
      } )




      const sortRatingBulkTrailer = BulkTrailer.sort((a , b)=> b.rating -  a.rating)
      const topRatingsBulk = sortRatingBulkTrailer.slice(0 , 2)
       const     takeBestBulks = topRatingsBulk.map(Bulks => (
         <p className="ratingNames" key={ Bulks.id}>{Bulks.CompanyName}</p>) )
         
    const sortRatingLowBed = LowBed.sort((a , b)=> b.rating -  a.rating)
      const topRatingsLowbed = sortRatingLowBed.slice(0 , 2)
       const   takeBestLowbeds = topRatingsLowbed.map(Lowbed =>(
        <p className="ratingNames" key={Lowbed.id}>{Lowbed.CompanyName}</p>) )

      const sortRatingSideTipper = SideTipper.sort((a , b)=> b.rating -  a.rating)
      const topRatingSideTipper = sortRatingSideTipper.slice(0 , 2)
       const   takeBestSideTipper = topRatingSideTipper.map(sideTipper => (
      <p className="ratingNames" key={sideTipper.id}>{sideTipper.CompanyName}</p>) )

      const sortRatingTaultliner = Taultliner.sort((a , b)=> b.rating -  a.rating)
      const topRatingsTaultliner = sortRatingTaultliner.slice(0 , 2)
       const  takeBestTaultliner = topRatingsTaultliner.map(Taultliner => (
      <p className="ratingNames" key={Taultliner.id}>{Taultliner.CompanyName}</p>) )

      const sortRatingsTankers = tankers.sort((a , b)=> b.rating - a.rating)
      const topRatingsTanker = sortRatingsTankers.slice(0 , 2)
       const takeBestTanker = topRatingsTanker.map(bestTrucks => (
        <p className="ratingNames" key={bestTrucks.id}> {bestTrucks.CompanyName} </p>) )
      

  const [loadsList, setLoadlist] = React.useState([]);
  const loadsCollection = collection(db, "Loads");

  const getLoadsList = async () => {
    try {
      const data = await getDocs(loadsCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      filteredData.sort((a, b) => a.timestamp - b.timestamp);
      setLoadlist(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    getLoadsList();
  }, []);


      let [addLoad , setaddLoad] = React.useState(false)

      useEffect(() => {
        document.body.style.paddingTop = addLoad ? '70px' : '250px';
      }, [addLoad]);


      function toggleAddLoad(){

        setaddLoad(prevState => !prevState)

      }

   
      // function handleClick(id){
      //   setaddLoad(state => !state)        
      //   setLoadlist(prevLoad => {
      //     return prevLoad.map( oneLoad =>{
      //       console.log(id)
      //       return oneLoad.id === id ? { ...oneLoad ,  backgroundColor: "green" }  :  oneLoad         
      //   })
      //   })
      // }

      function handleClick(id) {
        setaddLoad(state => !state);
      
        setLoadlist(prevLoad => {
          const updatedLoadList = prevLoad.map(oneLoad => ({
            ...oneLoad,
            backgroundColor: oneLoad.id === id ? "#F2F2F2" : "#EDEDED"
          }));
      
          const sortedLoadList = updatedLoadList.sort((a, b) => a.backgroundColor === "#F2F2F2" ? -1 : b.backgroundColor === "#F2F2F2" ? 1 : 0);
      
          return sortedLoadList;
        });
      }

      let miniLoad
      if(addLoad === true){  
        trucks = loadsList.map(load => {
          return(
           
            <AddLoad
              item = {load}
              backgroundColor = {load.backgroundColor}
            />
          )
        })
      }
      else{       
         miniLoad =  loadsList.map(load =>{

          return(
            <MiniLoad
              item = {load}
              handleClick = {()=>handleClick(load.id) }
            />
          )
        })
      }

   
        
        const allData = [ ...BulkTrailer , ...LowBed , ...SideTipper , ...tankers , ...Taultliner ]
          

        const [filteredData, setFilteredData] = React.useState([]);
        const [wordEntered, setWordEntered] = React.useState("");
      
        const handleFilter = (event) => {
          const searchWord = event.target.value;
          setWordEntered(searchWord);
          const newFilter = allData.filter((value) => {
            console.log(value )
            
            return    ( value.CompanyName ||  value.fromLocation || value.toLocation ).toLowerCase().includes(searchWord.toLowerCase());
          });
      
          if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        };
        const clearInput = () => {
          setFilteredData([]);
          setWordEntered("");
        };
        
        const displaySearched =  filteredData.slice(0, 15).map((value , key)=>{
            return(
              <div className="dataItem">
              <div className='wordsSearched' >{value.CompanyName} </div>
              <div  className='wordsSearched' >from {value.fromLocation } </div>
              <div className='wordsSearched' >to {value.toLocation  } </div>
              </div>
            )
          })
        

    return(
    <body>
    { currentUser  ?
                
      <div>
      <div>
      <Header
        addLoadState ={toggleAddLoad}
        addBulkTrailer ={ getBulktrailers}
        addSideTippers = { getSideTippers}
        handleFilter = {handleFilter}
       sideBar = {
          <aside className="sise-bar">
          <div className="all-names" >

              <p className="bulkavai">Available</p>
              <p className="sideTipperavai">Available</p>
              <p className="lowbedavai">Available</p>
              <p className="tankeravai">Available</p>
              <p className="tauntlineAvai">Available</p>

             <div className="BulkAmnt">{BulkTrailer.length}</div>
             <div className="SideTipperAmnt">{SideTipper.length}</div>
              <div className="lowBedAmnt">{LowBed.length}</div>
             <div className="TankerAmnt">{tankers.length}</div>
             <div className="tauntlinerAmnt">{Taultliner.length}</div>

          {sideBarName} 
          </div>
    
          <h3 className="most-reviewd">Most reviewed</h3>

            {takeBestBulks}
            {takeBestSideTipper}
            {takeBestLowbeds}
            {takeBestTanker}  
            {takeBestTaultliner}
          
          </aside>
        }
      />      { filteredData.length > 0 && (
              <div className='displaySearched' >
              {displaySearched}
             </div>
              )
              }

      <div className='miniloads'>
        {miniLoad}
        </div>
   <Username/>
      <section className="Main-grid"> 
        {trucks}
      
      </section>
      </div>
      </div>            
       :
       <Auth/>
    }
      </body>
       )
      }

export default App


