import React from "react";
import "./styles/Header.css"
import searchIcon from "../public/images/icons/search.svg"
import openHum from "../public/images/icons/menu_FILL0_wght400_GRAD0_opsz48.svg"
import closeHum from "../public/images/icons/menu_open_FILL0_wght400_GRAD0_opsz48.svg"
import BulkTrailers from "./addBulkTrailer";
import SideTipper from "./addSideTipper";
import LowBeds from "./addLowBeds";
import tankers from "./addTankers";
import tauntliner from "./addTauntliner";

function Header(props){

  let [menu , seMenu] = React.useState(true)
  
  function toggleSideBar(){
    seMenu(prevMenu => !prevMenu)
  }

  let currentMneu = menu ? closeHum : openHum


  let  [dropDown , setDropdown] = React.useState(false)

  
  function displayDropdown(){
    setDropdown(prevDropdown => !prevDropdown)
    
  }

  let [addBulkTrailer , setBulkTrailer] = React.useState(false)  
  function toggleBulkTrailer(){
    setBulkTrailer(prevBulkTrailer => !prevBulkTrailer)
  }  

  const [addSideTipper , setSideTipper] = React.useState(false)

  function toggleSideTipper(){
    setSideTipper(prevBulkTrailer => !prevBulkTrailer)
  }

  const [addLowBeds , setLowBeds] = React.useState(false)

  function toggleLowBeds(){
    setLowBeds(prevBulkTrailer => !prevBulkTrailer)
  }

  const [addTankers , setTankers] = React.useState(false)

  function toggleTankers(){
    setTankers(prevBulkTrailer => !prevBulkTrailer)
  }

  const [addTauntliner , setTauntliner] = React.useState(false)

  function toggleTauntliner(){
    setTauntliner(prevBulkTrailer => !prevBulkTrailer)
  }    
    
  function DropDown(){
    return(
      dropDown ?
      <div className="dropDown">

        <button onClick={toggleBulkTrailer}>Bulk Trailers</button>
        {addBulkTrailer && BulkTrailers()}

        <button onClick={toggleSideTipper}>SideTipper</button>
        {addSideTipper && SideTipper()}

        <button onClick={toggleLowBeds}>Low Beds</button>
        {addLowBeds && LowBeds()}

        <button onClick={toggleTankers}>tankers</button>
        {addTankers && tankers()}

        <button onClick={toggleTauntliner}>tauntliner</button>
        {addTauntliner && tauntliner()}

      </div>
        :
        console.log("fuck again")
    )
  } 
    React.memo(BulkTrailers())
    React.memo(SideTipper())
    React.memo(LowBeds())
    React.memo(tankers() )
    React.memo(tauntliner() )

  function setErythingFalse(){
    setBulkTrailer(prevStae => false)
    setLowBeds(prevState => false)
    setTankers(prevState =>false)
    setTauntliner(prevStae => false)
    setSideTipper(prevStae => false)
  }
    

    return(
      <header>

        {menu ? props.sideBar : console.log("fuvl")}
        
        <div className="left-section"> 
          <img src={currentMneu} onClick={toggleSideBar} />
         <h3>Truck Connect</h3>
        </div>

        <div className="middle-section">
          <input type="text" className="search-bar" placeholder="Search" />
           <button>
           <img src={searchIcon} width="50px" />
           </button>
        </div>

        <div className="right-section">
          <div className="addLoad" onClick={props.addLoadState} >Loads</div>
          <div className="addLoad" onClick={displayDropdown} >Add truck</div>
            <button onClick={setErythingFalse}>back</button>
          <DropDown/>
          </div>

      </header>
    )
}

export default  React.memo( Header)