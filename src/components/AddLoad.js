import React from "react"
import "./styles/AddLoad.css"
import { collection, getDocs , doc, addDoc} from "firebase/firestore"
import { db } from "./config/fireBase"
function AddLoad(){
  let [swichBetwnLoad , setstate] = React.useState(true)
  
  function togglestateLoad(){
    setstate(prevState => !prevState)
  }

  const [formData , setFormData] = React.useState("") 
  function handleTypedText(event){
    setFormData(event.target.value)
  }

  const [loadsList , setLoadlist] = React.useState([])
  const loadsCollection = collection(db, "Loads")

  const getLoadsList = async()=>{
      try{
        const data = await getDocs(loadsCollection)
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
          id : doc.id
        }))
        setLoadlist(filteredData)
      }catch(err){
        console.error(err)
      }
  }

  React.useEffect(()=>{
    getLoadsList()
  }, [])

  const handleSubmit = async (event)=>{
    event.preventDefault()

    try{
        await addDoc(loadsCollection , {
          loads : formData
        })
        getLoadsList()
      }
      catch(err){
      console.error(err)
    }
  }

  console.log(loadsList)


  return(
    <div>
      <div className="displayLoad">
        <h1>Comapny name</h1>
        <h3>contact</h3>
        <h1>type of load </h1>
        <h3>from Harare to kadoma</h3>
        <h3>Rate 50 per tonne</h3>
        <h3> payment terms</h3>
        <h3>Requirements</h3>
        <p>additional info </p>

        {loadsList.map((load)=>(
          <div>{load.loads}</div>
        ))}
      </div>
    {  
        swichBetwnLoad ?
        
        <div onClick={togglestateLoad} className="Add-loadBtn">Add load</div>
        :
        <form onSubmit={handleSubmit}>

        
        <input
        type="text"
        placeholder="Add New Load"
        className="Add-new-load"
        onChange={handleTypedText}
        />
        <button>+</button>
        </form>
}        

    </div>
  )

}
export default React.memo( AddLoad)