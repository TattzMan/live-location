  import React from "react"
import { storage } from "../config/fireBase";
import {getDownloadURL, ref , uploadBytes} from "firebase/storage"
import { collection, doc, getDoc, addDoc } from 'firebase/firestore';
import { db, auth } from "../config/fireBase";
import {v4} from "uuid"
import CircularProgress from "@material-ui/core/CircularProgress";


function LowBeds(props){

  const [ username , setUsername] = React.useState('');

  React.useEffect(()=>{
  const getCurrentUserName = async () => {
    try {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;

        const docRef = doc(db, 'usernames', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  getCurrentUserName()
}, [])
  
  // specify the database to use
  const LowBedsDB = collection(db,"LowBeds")

  const [formDta , setFormData] = React.useState({
    fromLocation : "",
    toLocation : "",
    like : false,
    rating : 0,
    contact : '',
    additionalInfo : "" ,
    trailerType : "" ,
  })

    function handlechange(event){
      const {name , value } = event.target

      setFormData(prevFOrmData =>{

        return{
          ...prevFOrmData,
          [name]  : value 
        }
      })
    }
  // loading effect will start here

  const [startLOading , setStartLoading ] = React.useState(false)

    const [ imageUpload, setImageUpload] = React.useState(null)    

    const uploadImage = ()=>{
    // ths is were we ay start loading 
    setStartLoading(prevState => !prevState)

      if(imageUpload === null) return
      const imageRef = ref(storage , `LowBeds/${imageUpload.name + v4() }`)
      uploadBytes(imageRef , imageUpload).then(()=>{
      })
    }
    

    const handleSubmit = async(event)=>{
      event.preventDefault()
      const imageRef = ref(storage , `LowBeds/${imageUpload.name}`)
       await uploadBytes(imageRef , imageUpload)
       // get image  url 
       let imageUrl = await getDownloadURL(imageRef)

      try{
        await addDoc(LowBedsDB ,{
          CompanyName : username ,
          fromLocation : formDta.fromLocation,
          toLocation : formDta.toLocation,
          like : formDta.like,
          rating : formDta.rating,
          contact : formDta.contact,
          imageUrl : imageUrl ,
          trailerType : formDta.trailerType ,
          additionalInfo : formDta.additionalInfo 
        })
        setFormData({
          fromLocation: "",
          toLocation: "",
          contact: "",
          trailerType : "" ,
          additionalInfo : ""
        });
        props.getLowBeds()
        props.setDropdown(prev => !prev)
  
      }catch(err){
        console.error(err)
      }
    }
    


  return(
    <form className="inputTruckform" onSubmit={handleSubmit}>
        <label>Add an image </label>
        <input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />

      {startLOading && <div className="loadingItem" > < CircularProgress /> </div> }

      <label> From location  </label>
        <input
          placeholder="from location"
          type="text"
          onChange={handlechange}
          name="fromLocation"
          value={formDta.fromLocation}
        />
      <label> To location </label>
        <input
          placeholder="to location"
          type="text"
          onChange={handlechange}
          name="toLocation"
          value={formDta.toLocation}
        />
      <label> contact  </label>
        <input
          placeholder="Contact"
          type="text"
          onChange={handlechange}
          name="contact"
          value={formDta.contact}
        />

        <label>Specify your trailer</label>
           <input
          placeholder="trailerType"
          type="text"
          onChange={handlechange}
          name="trailerType"
          value={formDta.trailerType}
        />
        <b> <label >additional infomation about the truck</label> </b>
              <input
          placeholder="additionalInfo"
          type="text"
          onChange={handlechange}
          name="additionalInfo"
          value={formDta.additionalInfo}
        />
        
        <button onClick={uploadImage} className="backInddForm" >submit</button>

      </form>
  )
}
export default LowBeds