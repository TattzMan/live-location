import logo from "../public/images/logo/Original on Transparent.png"
import pic1 from  "../public/images/IntroPics/medium-shot-man-wearing-helmet.jpg"
import pic2 from "../public/images/IntroPics/supply-chain-representation-still-life(1).jpg"
import pic3 from "../public/images/IntroPics/supply-chain-representation-still-life.jpg"
import pic4 from "../public/images/IntroPics/vehicles-laptop-supply-chain-representation.jpg"
import { ArrowDropDown } from '@material-ui/icons';
import "../components/Intro.css"
function Intro(props) {
  return(
  <div className="mainDiv">
   <div className="placeHolder">
    c
    </div> 
    <div className="bigDisplay"  >
       <div className="flexIterms">
        
        <div className="first">
      {/* <img src="https://img.freepik.com/premium-photo/orange-colored-uniform-with-tablet-black-man-is-standing-road-with-truck-it_146671-107319.jpg?w=826" height="200px" /> */}

      {/* <img src="https://img.freepik.com/premium-photo/smile-african-male-postal-delivery-courier-man-front-car-delivering-package_255667-61290.jpg?size=626&ext=jpg&ga=GA1.2.1476958990.1706186997&semt=ais"   height="200px"/> */}
          <img src={logo} width="250px"/>
        </div>
        {/* <img src={pic1} height="150px" /> */}
        {/* <img src={pic2} height="150px" /> */}
        {/* <img src={pic3} height="150px" /> */}
        <div className="scnd">
        <div>home</div>
        <div>Contact</div>
        <div className="third">Learn more</div>
        <div className="forth">weed</div>
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
        <img src="https://img.freepik.com/premium-photo/3d-transport-online-concept-with-forklift-cargo-boxes-magnifying-glass-mobile-phone-3d-rendering_265427-258.jpg?size=626&ext=jpg&ga=GA1.1.1476958990.1706186997&semt=ais" className="scndImg"/>

        {/* <img src={pic4} height="150px" /> */}
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
