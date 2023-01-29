import React, { useEffect, useState } from 'react'
import './RatingsList.css'
import {db} from './firebase';
import { Icon } from "@iconify/react";
import {storage} from './firebase';
import {ref, getDownloadURL} from "firebase/storage";
import { collection, getDocs } from "firebase/firestore"; 

function RatingsList({name}) {
    const [ratings, setRatings] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
        console.log("running useEffect");
        const getRatings = async() => {
            const data = await getDocs(collection(db, `${name} ratings`));
            if(data){
                setRatings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
                console.log("Setting data");
            } else {
                console.log("No data found");
                return;
            }
        };
        console.log("Testing");
        getRatings();
    }, [name]);

    useEffect(() => {
        if (ratings.length > 0) {
            ratings.forEach(async (rate) => {
                console.log(rate.imageId);
                // using promise to update the state
                if(rate.imageId !== ""){
                    const url = await getDownloadURL(ref(storage, `images/${rate.imageId}`));
                    console.log(url);
                    setImageUrls(prev => ({...prev, [rate.id] : url}));
                } else {
                    setImageUrls(prev => ({...prev, [rate.id] : ""}));
                }
            });
        }
    }, [ratings]);

  return (
    <div className="list">
        <h3>Reviews for {name}</h3>
        { ratings.length > 0 &&
        <h1>{(ratings.reduce((acc, curr) => acc + curr.rate, 0) / ratings.length).toFixed(1)}</h1>}
        <h4>{ratings.length} reviews</h4>
        {ratings.map((rate) => {
            return <div className="rating__box" key={rate.id}>
                {imageUrls[rate.id] !== "" ? <img src={imageUrls[rate.id]} alt="Example"/> : null}
                <div>
                    {[<Icon icon={"ic:round-star-rate"}/>,
                    <Icon icon={"ic:round-star-rate"}/>,
                    <Icon icon={"ic:round-star-rate"}/>,
                    <Icon icon={"ic:round-star-rate"}/>,
                    <Icon icon={"ic:round-star-rate"}/>].map((item, index) => (
                        <span
                        key={index}
                        className={`span ${index <= rate.rate - 1 ? "light-up" : ""}`}
                        >
                        {item}
                        </span>
                    ))}
                </div>
                <div>
                    {rate.message}
                </div>
            </div>
        })}
    </div>
  )
}

export default RatingsList