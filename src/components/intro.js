import logo from "../public/images/logo/Original on Transparent.png"
import pic1 from  "../public/images/IntroPics/medium-shot-man-wearing-helmet.jpg"
import pic2 from "../public/images/IntroPics/supply-chain-representation-still-life(1).jpg"
import pic3 from "../public/images/IntroPics/supply-chain-representation-still-life.jpg"
import pic4 from "../public/images/IntroPics/vehicles-laptop-supply-chain-representation.jpg"
import { ArrowDropDown } from '@material-ui/icons';
import "../components/Intro.css"
function Intro(params) {
  return(
  <div className="makeBackgroundColor">
    <div>p</div>
    <div className="bigDisplay"  >
       <div className="flexIterms">
        
        <div>
      {/* <img src="https://img.freepik.com/premium-photo/orange-colored-uniform-with-tablet-black-man-is-standing-road-with-truck-it_146671-107319.jpg?w=826" height="200px" /> */}

      {/* <img src="https://img.freepik.com/premium-photo/smile-african-male-postal-delivery-courier-man-front-car-delivering-package_255667-61290.jpg?size=626&ext=jpg&ga=GA1.2.1476958990.1706186997&semt=ais"   height="200px"/> */}
          <img src={logo} width="250px"/>
        </div>
        {/* <img src={pic1} height="150px" /> */}
        {/* <img src={pic2} height="150px" /> */}
        {/* <img src={pic3} height="150px" /> */}
        <div>Contact</div>
        <div>Learn more</div>
        <div>weed</div>
        <div>"Get Started"</div>
      </div>
    
     <div className="imageAndCatchText">
      <div className="frstTextDiv">
    <h1>Find Trucks, Find Loads, Find Success!</h1>
    <h3>Discover the Future of Trucking and Logistics. Scroll Down to Explore Efficiency, Connectivity, and Endless Possibilities.</h3>

      </div>
        <img src="https://img.freepik.com/premium-photo/3d-transport-online-concept-with-forklift-cargo-boxes-magnifying-glass-mobile-phone-3d-rendering_265427-258.jpg?size=626&ext=jpg&ga=GA1.1.1476958990.1706186997&semt=ais" className="scndImg"/>

        {/* <img src={pic4} height="150px" /> */}
     </div>
    </div>
    <div>Click here to skip and visit page</div>
    < ArrowDropDown/> 
    <h2>About Us</h2>
    <p>Welcome to Truckerz the premier online platform dedicated to revolutionizing the trucking and logistics industry. We are here to transform the way truck loads and trucks are marketed, leveraging cutting-edge technology to enhance efficiency, accessibility, and options for all stakeholders.</p>
    <br/>
    <br/>
    <br/>
    <h1>Vision</h1>
    <p>At Truckerz, our mission is simple: to improve the trucking and loads industry by seamlessly connecting truckers and load providers through our innovative platform. With our user-friendly interface and powerful search capabilities, finding the perfect truck or load has never been easier. Say goodbye to time-consuming phone calls and endless searches; we're here to streamline the process and provide you with more options than ever before.</p>
    <br/>
    <br/>
    <p>Not only are we committed to facilitating efficient transactions, but we're also dedicated to fostering a vibrant community of truckers and load providers. We believe in the power of collaboration and networking, creating an ecosystem where industry professionals can connect, share insights, and grow together.</p>
    <br/>
    <br/>
    <p>Harnessing the power of technology, we elevate trucking and loads. Experience convenience, speed, and endless possibilities at [Your Website Name]. Let's build a stronger, connected trucking community.</p>

    <br/>
    <br/>
    <button>Explore Now"</button>
  </div>
  )
}
export default Intro
