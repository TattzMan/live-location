import React from "react"
import { auth , googleProviser } from "./config/fireBase"
import {createUserWithEmailAndPassword , signInWithPopup } from  'firebase/auth'
import googlePic from '../public/images/icons/google.svg'


function Auth(){
  const [email , setEmail] = React.useState("")
  const [password , setPasword] = React.useState("")

  const signIn = async () =>{
    try{
    await createUserWithEmailAndPassword(auth, email , password)
    }catch(err){
      console.error(err)
    }

  }
  const singinWithGoogle = async ()=>{
    
    try{
    await signInWithPopup(auth, googleProviser)
    }catch (err){
      console.error(err)
    }
  }




  return(
    <div className="makeBackgroundColor">
    <div className="authDiv">
      <h1>WELCOME TO TRUCKERZ</h1>
      <h3>ALL LOADS AND TRUCKS CONNECTED</h3>
      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        className="singIN"
      />

      <input
        placeholder="password"
        type="password" 
        onChange={(e)=>setPasword(e.target.value)}
        className="singIN"
      />
    <button onClick={signIn} className="singInButton">sign in</button>

    <button onClick={singinWithGoogle} className="googleButton" > <img src={googlePic} height='35px' /> </button>

    </div>
    </div>
  )
}
export default Auth

// const signInWithGoogle = async ()=>{
//   try{
//     await signInWithPopup(auth , googleProvider)
//   }catch(err){
//     console.error(err)
//   }
// }


//   return(
//     <div>
  
//       <button onClick={signInWithGoogle}>sing in with google</button>

//     </div>
//   )