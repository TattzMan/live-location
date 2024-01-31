import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logo from "../public/images/logo/Original on Transparent.png"
import pic1 from  "../public/images/IntroPics/medium-shot-man-wearing-helmet.jpg"
import pic2 from "../public/images/IntroPics/supply-chain-representation-still-life(1).jpg"
import pic3 from "../public/images/IntroPics/supply-chain-representation-still-life.jpg"
import pic4 from "../public/images/IntroPics/vehicles-laptop-supply-chain-representation.jpg"
import { ArrowDropDown } from '@material-ui/icons';
import "../components/Intro.css"
function Intro(props) {
  let [menu , seMenu] = React.useState(false)  
  function toggleSideBar(){
    seMenu(prevMenu => !prevMenu)
  }
  let currentMneu = menu ? <MenuOpenIcon onClick={toggleSideBar} className="menu" /> : <MenuIcon onClick={toggleSideBar} className="menu"/>

  

   if(window.innerWidth >= 500 ){
    menu = false
   }
   
   let [ contact , setContact ] = React.useState(false)

   function toggleContact(){
    setContact(prevState => !prevState)
   }

   

  return(
    <div className="mainDiv">


      {/* This is were a dropdown will show for small screen only */}
    {menu && <div>
      
        <div className="drpDownIntro">

        <div  >
          home
        </div>

        <div className="homeIntro" onClick={toggleContact}>Contact

     {contact &&  <div className="inHomeIntro">
        
      
      <a href="https://wa.me/263787884434  " target="_blank" >  Contact us via WhatsApp </a>
      <a href="mailto:truckerz2023@gmail.com" target="_blank" > Contact us via  email</a>
      <a href="tel:+263787884434"> Contact us via  Phone Calls </a>
        </div> }
        </div>

        <div className="third">Learn more</div>
        <div className="forth">Help Center</div>

        </div>
    </div> }

      {/* and it end hew */}

   <div className="placeHolder">
    c
    </div> 
    <div className="bigDisplay"  >
      

       <div className="flexIterms">
    {window.innerWidth <= 500 && currentMneu}
          <img src={logo} width="250px" className="logoImage" />
        <div className="scnd">

        <div  >
          home


        </div>

        <div className="homeIntro">Contact

        <div className="inHomeIntro">
        
      <a href="https://wa.me/263787884434  " target="_blank" >  Contact us via WhatsApp </a>
      <a href="mailto:truckerz2023@gmail.com" target="_blank" > Contact us via  email</a>
      <a href="tel:+263787884434"> Contact us via  Phone Calls </a>
        </div>

        </div>

        <div className="third">Learn more</div>
        <div className="forth">Help Center</div>
          </div>

        <button className="fifth , introBtn" onClick={props.toggleIntro} >Get Started</button>
      </div>
    
    </div>
     <div className="imageAndCatchText">
      <div className="frstTextDiv">
    <h1>Find Trucks, Find Loads, Find Success!</h1>
    <h3>Embrace Success Today, for <span>  FREE! </span> Click 'Start' to Explore, Add, and Amplify Your Loads and Trucks. Join our Community of Industry Leaders and Experience the Power of Connection. Scroll Down to Know Your Journey.</h3>
        <button onClick={props.toggleIntro} className="introBtn">    Get Going </button>

      </div>
        {/* <img src="https://img.freepik.com/premium-photo/3d-transport-online-concept-with-forklift-cargo-boxes-magnifying-glass-mobile-phone-3d-rendering_265427-258.jpg?size=626&ext=jpg&ga=GA1.1.1476958990.1706186997&semt=ais" className="scndImg"/> */}

        <img src={pic4} className="scndImg"/>
     </div>

    <div className="textBelowFirstINtro">
    <p> Truckerz All loads and trucks connected </p>
    <h2> <span > Fuel your growth,</span> conquer new horizons. Let our platform be your trusted partner in <span>driving your Freight business</span>   </h2>
      <h2 className="fordwardWord"> forward </h2>
    </div>

    <div  className="moreINfo" >
      <div>
        <img src={pic1} className="wlcmImage" />
        </div>      

      <div className="wlcmText">
      <p> Welcome to Truckerz the premier online platform dedicated to revolutionizing the trucking and logistics industry. We are here to transform the way truck loads and trucks are marketed, leveraging cutting-edge technology to enhance efficiency, accessibility, and options for all stakeholders. </p>
        
        <br/>
        <hr/>
    <p>Not only are we committed to facilitating efficient transactions, but we're also dedicated to fostering a vibrant community of truckers and load providers. We believe in the power of collaboration and networking, creating an ecosystem where industry professionals can connect, share insights, and grow together.</p>
      </div>
      
      </div>
    <br/>
    <br/>
    <br/>

    <div className="moreINfo">

      <div className="wlcmText">
    <p>At Truckerz, our mission is simple: to improve the trucking and loads industry by seamlessly connecting truckers and load providers through our innovative platform. With our user-friendly interface and powerful search capabilities, finding the perfect truck or load has never been easier. Say goodbye to time-consuming phone calls and endless searches; we're here to streamline the process and provide you with more options than ever before.</p>

        <hr/>
    <br/>
    <p>Harnessing the power of technology, we elevate trucking and loads. Experience convenience, speed, and endless possibilities at [Your Website Name]. Let's build a stronger, connected trucking community.</p>

 </div>
        <img src={pic2} className="wlcmImage"/>
 </div>


    <div className="lastDiv">
      <h2>Take the next step </h2>
      <h4>Start transforming your customer experience on Truckerz Platform.</h4>
    <button onClick={props.toggleIntro} className="introBtn" >Explore Now</button>
    </div>

  </div>
  )
}
export default Intro
