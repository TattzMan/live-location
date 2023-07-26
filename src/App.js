import React from "react";
import "./App.css"
import Header from "./components/Header";
import AddLoad from "./components/AddLoad";

import SideBar from "./components/SideBar";
import SideBarData from "./components/SideBarData";

import Tankers from "./components/pages/Tankers";
import TankersData from "./components/DataBase/TankersData";

import LowBeds from "./components/pages/LowBeds";
import LowBedsData from "./components/DataBase/LowBedsData"

import BulkTrailers from "./components/pages/BulkTrailers";
import BulkTrailersData from "./components/DataBase/BulkTrailersData";

import SideTippers from "./components/pages/SideTippers";
import SideTipperData from "./components/DataBase/SideTipperData";

import Taultliners from "./components/pages/Taultliner";
import TautlinerData from "./components/DataBase/TautlinerData";


function App(){      
  
  let [ BulkTrailer , setBulkTrailer] = React.useState(BulkTrailersData)
  let [ tankers , setTanker] = React.useState(TankersData)
  let [ LowBed , setLowBeds] = React.useState(LowBedsData)
  let [ SideTipper , setSideTipper] = React.useState(SideTipperData)
  let [ Taultliner , setTautliner] = React.useState(TautlinerData)

  let [sideBarNames , setSideBarName] = React.useState(SideBarData)

  function toggleSideBar (id){

    setSideBarName(prevName => {
      return prevName.map( oneName =>{
        return oneName.id === id ? {...oneName , state : true } : {...oneName , state : false}
             
      })
  })

  }

  function toggleTanker (id){
    setTanker(prevTruck => {
      return prevTruck.map( oneTruck =>{
        return oneTruck.id === id ? {...oneTruck , on : !oneTruck.on } : oneTruck
                
      })
  })
  }

  function toggleLowBed (id){
    setLowBeds (prevTruck => {
      return prevTruck.map( oneTruck =>{
        return oneTruck.id === id ? {...oneTruck , on : !oneTruck.on } : oneTruck
                
      })
    })
  }
  function toggleBulkTrailer (id){
    setBulkTrailer(prevTruck => {
      return prevTruck.map( oneTruck =>{
        return oneTruck.id === id ? {...oneTruck , on : !oneTruck.on } : oneTruck
                
      })
    })
  }
  function toggleSideTipper (id){
    setSideTipper(prevTruck => {
      return prevTruck.map( oneTruck =>{
        return oneTruck.id === id ? {...oneTruck , on : !oneTruck.on } : oneTruck
                
      })
    })
  }

  function toggleTautliner (id){
    setTautliner (prevTruck => {
      return prevTruck.map( oneTruck =>{
        return oneTruck.id === id ? {...oneTruck , on : !oneTruck.on } : oneTruck
                
      })
    })
  }
    
    
    let trucks 

    const sideBarName = sideBarNames.map(oneName =>{
      
      
      {
        if (oneName.id === 1 && oneName.state === true){
          

           trucks = BulkTrailer.map(truck =>{      
            return(
              < BulkTrailers
              liked = {truck.on}
            key = {truck.id}
            item = {truck}
            handleClick = {()=> toggleBulkTrailer(truck.id)}
            />     
            
            )})
          }    
          
          else if (oneName.id === 3 && oneName.state === true){
            trucks = LowBed.map(truck =>{      
              
              return(
                <LowBeds
                liked = {truck.on}
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
                    liked = {truck.on}
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
              liked = {truck.on}
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
            <Taultliners
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
      const  takeBestBulks = topRatingsBulk.map(Bulks => (
         <p className="ratingNames" key={ Bulks.id}>{Bulks.name}</p>) )
    
      const sortRatingLowBed = LowBed.sort((a , b)=> b.rating -  a.rating)
      const topRatingsLowbed = sortRatingLowBed.slice(0 , 2)
      const  takeBestLowbeds = topRatingsLowbed.map(Lowbed =>(
         <p className="ratingNames" key={Lowbed.id}>{Lowbed.name}</p>) )
    
      const sortRatingSideTipper = SideTipper.sort((a , b)=> b.rating -  a.rating)
      const topRatingSideTipper = sortRatingSideTipper.slice(0 , 2)
      const  takeBestSideTipper = topRatingSideTipper.map(sideTipper => (
      <p className="ratingNames" key={sideTipper.id}>{sideTipper.name}</p>) )
    
      const sortRatingTaultliner = Taultliner.sort((a , b)=> b.rating -  a.rating)
      const topRatingsTaultliner = sortRatingTaultliner.slice(0 , 2)
      const  takeBestTaultliner = topRatingsTaultliner.map(Taultliner => (
      <p className="ratingNames" key={Taultliner.id}>{Taultliner.name}</p>) )

      const sortRatingsTankers = tankers.sort((a , b)=> b.rating - a.rating)
      const topRatingsTanker = sortRatingsTankers.slice(0 , 2)
      const takeBestTanker = topRatingsTanker.map(bestTrucks => (
         <p className="ratingNames" key={bestTrucks.id}> {bestTrucks.name} </p>) )


       
      let [addLoad , setaddLoad] = React.useState(false)

      function toggleAddLoad(){
        setaddLoad(prevState => !prevState)
      }
  
      addLoad ?
        trucks = <AddLoad/>  
        : console.log("weed")  

    return(
    <div>
      <Header    
        addLoadState ={toggleAddLoad}
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
          {takeBestTanker}  
          {takeBestBulks}
          {takeBestLowbeds}
          {takeBestSideTipper}
          {takeBestTaultliner}
          </aside>
        }
      />

 
   
      <section className="Main-grid"> 
        {trucks}
      
      </section>
     

      </div>
       ) 

    }
export default App

