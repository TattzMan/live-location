import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config/fireBase";

function Username() {

  const [username, setUsername] = React.useState("");
  const usernameList = collection(db, "usernames");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(usernameList, {
        username: username,
      });
      setUsername(""); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Username;