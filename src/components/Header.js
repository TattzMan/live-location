import React from "react";
import "./styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import BulkTrailers from "./DataBase/addBulkTrailer";
import SideTipper from "./DataBase/addSideTipper";
import LowBeds from "./DataBase/addLowBeds";
import Tankers from "./DataBase/addTankers";
import Tauntliner from "./DataBase/addTauntliner";
import AddLoaadDB from "./DataBase/addloadDB";
import { signOut} from  'firebase/auth'
import { auth  } from "./config/fireBase"
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import CurrentUser from './pages/DisplayCurrentUser'
import SendIcon from '@mui/icons-material/Send';
import Auth from './auth'  
import Feedback from "./feedback";
import GetFeedback from "./getFeedbacks";

function Header(props){


  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    // Check if user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  let [menu , seMenu] = React.useState(false)  
  function toggleSideBar(){
    seMenu(prevMenu => !prevMenu)
  }
  let currentMneu = menu ? <MenuOpenIcon onClick={toggleSideBar} className="menu" /> : <MenuIcon onClick={toggleSideBar} className="menu"/>
  let  [dropDown , setDropdown] = React.useState(false)


  
  function displayDropdown(){   
    setDropdown(prevDropdown => !prevDropdown)   
    setSmallMenu(prev=> false)   
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

  //  This is going to trigger thee option for users to send their feedback using whatsapp and is connected to the feedback file were there is the rest of code for feedback

  const [feedback , setFeedback] = useState(false);

  function displayFeedback(){
    setFeedback(prevstate => !prevstate)
  }

  


  const [addLoads , setAddloads] = React.useState(false)

  function displayAddLooads(){
    setAddloads(prevsate => !prevsate)
  }
  
  //  THe dropdown that allow you to add item like load or truck 
  function DropDown() {
    return (

      dropDown ? (
        <div className="dropDown">

        <button onClick={displayAddLooads} className='firstButtonIsnDrop'>add load</button>
          
          {addLoads && <div className="addLoadDB">
          <button onClick={displayAddLooads} className="bacInDropDown" >back</button>
            <AddLoaadDB
            getloadsList = {props.getLoadsList}
            />
          </div>
          }
  
          <button onClick={displayAddTrucks} className='firstButtonIsnDrop'>add Truck</button>
          {addTrucks && displayTrucks()}
        </div>
      ) : null
    );
  
  }


    function displayTrucks(){
      return(
        <div className="dropDown">
    <button onClick={displayAddTrucks}> back</button>
        <button onClick={toggleBulkTrailer} className='specifytruck'>Bulk trailers</button>
        
        {addBulkTrailer && <div className="inputTruckDiv">
          <BulkTrailers
          getBulktrailers={props.getBulktrailers}
          setDropdown =  {setDropdown} 
          />
          <div onClick={toggleBulkTrailer}  className="backNewTruck" > back </div>

        </div>

        }

        <button onClick={toggleSideTipper} >SideTipper</button>
        {addSideTipper && <div className="inputTruckDiv">
          <SideTipper/>
          <div onClick={toggleSideTipper}  className="backNewTruck" > back </div>
        </div> }

        <button onClick={toggleLowBeds} >Low Beds</button>
        {addLowBeds && <div className="inputTruckDiv">
          <LowBeds/>
          <div onClick={toggleLowBeds} className="backNewTruck" >back</div>
        </div>
        }
        

        <button onClick={toggleTankers} className='specifytruck'>tankers</button>
        {addTankers && <div className="inputTruckDiv">
          <Tankers/>
          <div onClick={toggleTankers} className="backNewTruck" >back</div >
          </div>}

        <button onClick={toggleTauntliner} className='specifytruck'>tauntliner</button>

        {addTauntliner && <div className="inputTruckDiv">
          <Tauntliner/>
          <div onClick={toggleTauntliner}  className="backNewTruck" >back</div>
        </div>}

      </div>     
      )
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
    setDropdown(prev=> false)
   }
   if(window.innerWidth >= 500 ){
    menu = true
   }


  // CHeck if somoene is running local host and display the feedbacks added by pple on the dropdown 
  const isLocalhost = window.location.hostname === 'localhost';

  const [ feedbackDisplay , setDisplayFeedback] = React.useState(false)

  function toggleDisplayFeedback(){
     setDisplayFeedback(prevState => !prevState)
  }

//  End of displaying feedback


   const [NewUserName, setNewUserName] = useState('');
   const [usernameDB, setUsernameDB] = useState(null);
   const db = getFirestore();
 
   useEffect(() => {
     const auth = getAuth();
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUsernameDB(doc(db, 'usernames', user.uid));
       } else {
         setUsernameDB(null);
       }});

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
      setSmallMenu(()=>false)
      setMyAcountBTN(prevState => !prevState)
    }

    function ttoggleDisplayInputUsername(){
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

          <div className="eneterUserNameDiv">
          <span className="labelspan">Enter new username</span>
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
        </div>
      );
    }

    //  check is a user has singed in before adding items to the datatbase they must sing in and it is connected with a file named auth were they are way used to sing in 
// so first check if the add button is clicked and user has not singed in n if true return a sing in page
    if(dropDown && currentUser === null){
      return(
        <Auth/>
      )
    }
  // THe end of drop down 

  
  //  The start of the main return for the whole header element 

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
          {/* ?\ A search bar used to search for loads found on header   */}
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search"
          onChange={props.handleFilter}
           />

           {/* A submit button with a search icon inisde which is beside a search input on middle section */}
           <button className="SearchButton">
           <SearchIcon/>
           </button>
   
        </div>

        <div className="right-section">

          {window.innerWidth <= 500 && < SearchIcon  onClick={handleMinisearchBar} width="30px" /> }

          <button className="addLoad" style={addNewCss} onClick={props.addLoadState}  >Loads</button>

      
          <div className="addLoad" onClick={  displayDropdown} >Add </div> 

          <DropDown/>
          
        <MoreVertIcon onClick={toggleSmallMenu}/>

        {/*the first feed back is a small letter when start for variable name that can be true or false and toggle feedback elemet  */}
        {/* THe second feed back have a capital letter to tke elements from the feedback file and display on the sreen  */}

        {feedback &&    <div   className="makeBackgroundColor">   
        <Feedback/>  <div onClick={displayFeedback}> back </div>  </div>      }

        {/* the feedback button can trigeer the feedback to be true and then display the emelemts */}
          {/* <div className="feedbackButton"  onClick={displayFeedback} > feedback </div>  */}

        {smallMenu ?
          <div className="smallMenu">
        <div onClick={toggleMyAccBTN} className="myAccount" > <AccountBoxIcon /> <span>my account </span>  </div>
        <div onClick={logout} className="logOut">  <span>logout</span> <LogoutIcon/> </div>


           { isLocalhost && <div>     <div onClick={toggleDisplayFeedback}> feedBacks </div>    
           
           {/* Displat these items if the feebacks button is clicked   */}
           {/* the GetFeeedback elemt is from getFeedbac.js elemtnwere thre is logic to displa the feedbacks  */}
            {feedbackDisplay && <div className="displayAddedLoads">
              <div onClick={toggleDisplayFeedback}>back</div>
              < GetFeedback />
            </div>  }

             </div> }
          </div>
          : null
        }       

        

        { myAccountBTN && <div className="EnterCurrentUser">
        <h1 style={{color :"black"} }>Welcome {props.username}</h1>
        { menu &&      
         <div className="sise-bar"> 
         <div className="all-names">
 
          <div onClick={ttoggleDisplayInputUsername} className="name"> Enter new username </div>  
         <div onClick={toggleCurrentUser} className="name" >Loads   </div>

         <div className="name">trucks</div> 
         </div>
         </div>
        
        }           

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

       </header> }</div>)}

export default  React.memo(Header)