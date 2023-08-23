import React from "react";
import "./styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import BulkTrailers from "./DataBase/addBulkTrailer";
import SideTipper from "./DataBase/addSideTipper";
import LowBeds from "./DataBase/addLowBeds";
import tankers from "./DataBase/addTankers";
import tauntliner from "./DataBase/addTauntliner";
import addLoaadDB from "./DataBase/addloadDB";
import { signOut} from  'firebase/auth'
import { auth  } from "./config/fireBase"
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, updateDoc , getDoc } from 'firebase/firestore';
import CurrentUser from '../components/DisplayCurrentUser'
import SendIcon from '@mui/icons-material/Send';


function Header(props){
  let [menu , seMenu] = React.useState(false)  
  function toggleSideBar(){
    seMenu(prevMenu => !prevMenu)
  }
  let currentMneu = menu ? <MenuOpenIcon onClick={toggleSideBar} className="menu" /> : <MenuIcon onClick={toggleSideBar} className="menu"/>
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

  const [addTrucks , setAddTrucks] = React.useState(false)

  function displayAddTrucks(){
    setAddTrucks(prevsate => !prevsate)
  }

  const [addLoads , setAddloads] = React.useState(false)

  function displayAddLooads(){
    setAddloads(prevsate => !prevsate)
  }


  function DropDown() {
    return (
      dropDown ? (
        <div className="dropDown">
          <button onClick={displayAddLooads} className='firstButtonIsnDrop'>add load</button>
          {addLoads && addLoaadDB()}
  
          <button onClick={displayAddTrucks} className='firstButtonIsnDrop'>add Truck</button>
          {addTrucks && displayTrucks()}
        </div>
      ) : null
    );
  }

    function displayTrucks(){
      return(
        <div className="dropDown">
        <button onClick={toggleBulkTrailer} className='specifytruck'>Bulk trailers</button>
        {addBulkTrailer && BulkTrailers()}

        <button onClick={toggleSideTipper} className='specifytruck'>SideTipper</button>
        {addSideTipper && SideTipper()}

        <button onClick={toggleLowBeds} className='specifytruck'>Low Beds</button>
        {addLowBeds && LowBeds()}

        <button onClick={toggleTankers} className='specifytruck'>tankers</button>
        {addTankers && tankers()}

        <button onClick={toggleTauntliner} className='specifytruck'>tauntliner</button>
        {addTauntliner && tauntliner()}

      </div>     
      )
    }

    BulkTrailers(props.username)
   SideTipper(props.username) 
   addLoaadDB(props.username)
    LowBeds(props.username)
    tankers(props.username) 
    tauntliner(props.username) 

  function setErythingFalse(){
    setBulkTrailer(prevStae => false)
    setLowBeds(prevState => false)
    setTankers(prevState =>false)
    setTauntliner(prevStae => false)
    setSideTipper(prevStae => false)
  }
  
  const logout = async ()=>{
    
    try{
    await signOut(auth)
    }catch (err){
      console.error(err)
    }
  }

  const addNewCss = dropDown ? {
 
   
  } : {};

  const [addMiniSearch , setMiniSearch] = React.useState(true)
    
   function handleMinisearchBar(){
    setMiniSearch(prevState => !prevState )
   }
 
   const [smallMenu , setSmallMenu] = React.useState(false)

   function toggleSmallMenu(){
    setSmallMenu(prevState => !prevState)
   }
   if(window.innerWidth >= 500 ){
    menu = true
   }

   const [NewUserName, setNewUserName] = useState('');
   const [userId, setUserId] = useState('');
   const [usernameDB, setUsernameDB] = useState(null);
   const db = getFirestore();
 
   useEffect(() => {
     const auth = getAuth();
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUserId(user.uid);
         setUsernameDB(doc(db, 'usernames', user.uid));
       } else {
         setUserId('');
         setUsernameDB(null);
       }
     });
 
     return () => unsubscribe();
   }, []);
 
   const handleUpdateUsername = async (event) => {
    event.preventDefault();
  
    try {
      await updateDoc(usernameDB, {
        username: NewUserName,
      });
      console.log('Document updated successfully!');
      setNewUserName('');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

    const [myAccountBTN , setMyAcountBTN] = React.useState(false)

    function toggleMyAccBTN(){
      setMyAcountBTN(prevState => !prevState)
    }
    const [displayInputUsername , setdisplayInputUsername] = React.useState(true)

    function ttoggleDisplayInputUsername(){
      setdisplayInputUsername(prevState => !prevState)
      setCurrentUserBtn(prevState => false)

    }

    const [CurrentUserBtn , setCurrentUserBtn] = React.useState(false)
   

    function toggleCurrentUser(){
      setCurrentUserBtn(prevState => !prevState)
    }

    let CurrentUserDisplay
    if(CurrentUserBtn){
      CurrentUserDisplay = props.currentUserLoads.map((item)=>{
      return(
        <CurrentUser
          item = {item}
        />
      )
    })
    }
    else {
      CurrentUserDisplay = (
        <div className="updateUsername">
          <p>this name will display on your added items</p>
          <span>username</span>
          <div className="inputContainer">
                <input
            type="text"
            value={NewUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Username"
            className="userNameInput"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); 
                handleUpdateUsername(e); 
              }
            }}
      />
          <button onClick={handleUpdateUsername} className="inputUsernameBTN"><SendIcon/></button>
          </div>
        </div>
      );
    }

    return(
      <div>
      {addMiniSearch ?
        <header>
          
        {menu && props.sideBar }
        <div className="left-section"> 
          
        {window.innerWidth <= 500 && currentMneu }

         <h1>Truckerz</h1>
        </div>

        <div className="middle-section">
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search"
          onChange={props.handleFilter}
           />

           <button className="SearchButton">
           <SearchIcon/>
           </button>
   
        </div>

        <div className="right-section">

          {window.innerWidth <= 500 && < SearchIcon  onClick={handleMinisearchBar} width="30px" /> }

          <button className="addLoad" style={addNewCss} onClick={props.addLoadState}  >Loads</button>
      
              <div className="addLoad" onClick={displayDropdown} >Add </div> 

          <DropDown/>
        { dropDown && <button onClick={setErythingFalse} className="backButton">back</button>}
        <MoreVertIcon onClick={toggleSmallMenu}/>

        {smallMenu ?
          <div className="smallMenu">
        <div onClick={toggleMyAccBTN} className="myAccount" > <AccountBoxIcon /> <span>my account </span>  </div>
        <div onClick={logout} className="logOut">  <span>logout</span> <LogoutIcon/> </div>

          </div>
          : null
        }
        
        


        { myAccountBTN && <div className="EnterCurrentUser">
        <h1>Welcome {props.username}</h1>

        <div className="sise-bar"> 
        <div className="all-names">
        <div onClick={ttoggleDisplayInputUsername} className="name"> Enter new username </div>  
        <div onClick={toggleCurrentUser} className="name" >Loads   </div>
        <div className="name">trucks</div>
        </div>
        </div>
            

        <div className="currentUserMain">
        {CurrentUserDisplay}
        </div>

          </div>}         
          </div>


      </header>
      :  <header>       
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search"
          onChange={props.handleFilter}
           />

        <button className="SearchButton">
           <SearchIcon width="30px" />
           </button>

       </header>
        }
</div>
    )
}

export default  React.memo(Header)