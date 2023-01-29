import './RatingInputBox.css';
import React, { useState } from "react";
import {useRef} from 'react';
import { Icon } from "@iconify/react"
import {db} from './firebase';
import {storage} from './firebase';
import {ref, uploadBytes} from "firebase/storage";
import {v4} from 'uuid';
import { collection, addDoc } from "firebase/firestore"; 

function RatingInputBox({name, user}) {
    const [rating, setRating] = useState(-1);
    const [imageUpload, setImageUpload] = useState(null);

    const inputRef = useRef(null);

    const sendPost = (e) => {
        console.log("running send post")
        e.preventDefault();
        
        if (!inputRef.current.value) return;
        if (rating === -1){
            alert("Please choose a rating between 1 -5 stars.");
            return;
        }

        if(!user[1].endsWith("@my.csun.edu")){
          alert("You are not logged into a csun email address, you are only allowed to view ratings, not post.");
          return;
        }

        let secretName = "";

        if (imageUpload){
          secretName = imageUpload.name + v4();
          const imageRef = ref(storage, `images/${secretName}`);
          uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded");
          });
        }

        addDoc(collection(db, `${name} ratings`), {
            message: inputRef.current.value,
            rate: rating,
            imageId: secretName,
          })
          .then(() => {
            alert(`Your rating for ${name} was submitted!` );
          })
          .catch((error) => {
            alert(error.message);
          });

        inputRef.current.value = "";
    };
  return (
    <div className="RatingInputBox">
        <div>
            Give {name} a rating!
        </div>
        <form>
            <input
            ref={inputRef}
            type="text" placeholder={`What do you think about ${name}?`}/>
            <input className="file__picker"
            type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
        </form>
            <div>
                {[<Icon icon={"ic:round-star-rate"}/>,
                <Icon icon={"ic:round-star-rate"}/>,
                <Icon icon={"ic:round-star-rate"}/>,
                <Icon icon={"ic:round-star-rate"}/>,
                <Icon icon={"ic:round-star-rate"}/>].map((item, index) => (
                    <span
                    key={index}
                    onClick={() => setRating(index + 1)}
                    className={`span ${index <= rating - 1 ? "light-up" : ""}`}
                    >
                    {item}
                    </span>
                ))}
            </div>
        <button type="submit" onClick={sendPost}>Submit Rating</button>
    </div>
  )
}

export default RatingInputBox