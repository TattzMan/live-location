import React from "react"
import "./styles/AddLoad.css"
function AddLoad(){
  let [swichBetwnLoad , setstate] = React.useState(true)
  
  function togglestateLoad(){
    setstate(prevState => !prevState)
  }

  const [formData , setFormData] = React.useState("") 
  function handleTypedText(event){
    setFormData(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
  }

  return(
    <div>
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