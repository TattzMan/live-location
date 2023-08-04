import React from "react";
import { db } from "../config/fireBase";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../config/fireBase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function BulkTrailers( param ) {

  const [addBulkTrailers, setAddBulkTrailers] = React.useState([]);

  const bulkTrailersDB = collection(db, "BulkTrailers");

  const [formDta, setFormData] = React.useState({
    CompanyName: "",
    onLoading: 6,
    onDelivery: 9,
    fromLocation: "",
    toLocation: "",
    like: false,
    rating: 0,
    contact: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setFormData((prevFOrmData) => {
      return {
        ...prevFOrmData,
        [name]: value,
      };
    });
  }

  const [imageUpload, setImageUpload] = React.useState(null);

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `BulkTrailer/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("refresh page to see changes");
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageRef = ref(storage, `BulkTrailer/${imageUpload.name}`);
    await uploadBytes(imageRef, imageUpload);
    let imageUrl = await getDownloadURL(imageRef);

    try {
      const docRef = await addDoc(bulkTrailersDB, {
        onDelivery: formDta.onDelivery,
        CompanyName: formDta.CompanyName,
        fromLocation: formDta.fromLocation,
        onLoading: formDta.onLoading,
        toLocation: formDta.toLocation,
        like: formDta.like,
        rating: formDta.rating,
        contact: formDta.contact,
        imageUrl: imageUrl,
      });
      const docSnapshot = await docRef.get();
      const newBulkTrailer = { id: docSnapshot.id, ...docSnapshot.data() };
      setAddBulkTrailers((prevBulkTrailers) => [
        ...prevBulkTrailers,
        newBulkTrailer,
      ]);

      param(newBulkTrailer.imageUrl);

      setFormData({
        CompanyName: "",
        onLoading: 6,
        onDelivery: 9,
        fromLocation: "",
        toLocation: "",
        like: false,
        rating: 0,
        contact: "",
      });
      setImageUpload(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="dropDown" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />

        <input
          placeholder="BulkTrailer"
          type="text"
          onChange={handlechange}
          name="CompanyName"
          value={formDta.CompanyName}
        />

        <input
          placeholder="loading ammount"
          type="number"
          onChange={handlechange}
          name="onLoading"
          value={formDta.onLoading}
        />

        <input
          placeholder="delivery ammount"
          type="number"
          onChange={handlechange}
          name="onDelivery"
          value={formDta.onDelivery}
        />

        <input
          placeholder="from location"
          type="text"
          onChange={handlechange}
          name="fromLocation"
          value={formDta.fromLocation}
        />

        <input
          placeholder="to location"
          type="text"
          onChange={handlechange}
          name="toLocation"
          value={formDta.toLocation}
        />

        <input
          placeholder="Contact"
          type="text"
          onChange={handlechange}
          name="contact"
          value={formDta.contact}
        />
        <button onClick={uploadImage}>submit</button>
      </form>

      <BulkTrailerList bulkTrailers={addBulkTrailers} />
    </div>
  );
}

function BulkTrailerList({ bulkTrailers }) {
  return (
    <div>
      <h2>Bulk Trailers</h2>
      {bulkTrailers.map((bulkTrailer) => (
        <BulkTrailer key={bulkTrailer.id} bulkTrailer={bulkTrailer} />
      ))}
    </div>
  );
}

function BulkTrailer({ bulkTrailer }) {
  return (
   <div key={bulkTrailer.id}>
      <p>{bulkTrailer.CompanyName}</p>
      <p>From: {bulkTrailer.fromLocation}</p>
      <p>To: {bulkTrailer.toLocation}</p>
      {bulkTrailer.like ? <p>Liked</p> : <p>Disliked</p>}
      <p>Rating: {bulkTrailer.rating}</p>
      {bulkTrailer.contact && <p>Contact: {bulkTrailer.contact}</p>}
      {bulkTrailer.imageUrl && <ImageDisplay imageUrl={bulkTrailer.imageUrl} />}
    </div>
  );
}

function ImageDisplay({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="Uploaded image" style={{ maxWidth: "100%" }} />
    </div>
  );
}

export default BulkTrailers;