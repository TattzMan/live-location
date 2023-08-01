import { auth , googleProviser } from "./config/fireBase"
import {createUserWithEmailAndPassword , signInWithPopup } from  'firebase/auth'
import React from "react"



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
    <div>
      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password" 
        onChange={(e)=>setPasword(e.target.value)}
      />
    <button onClick={signIn}>sign in</button>

    <button onClick={singinWithGoogle} >sing in with google</button>


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