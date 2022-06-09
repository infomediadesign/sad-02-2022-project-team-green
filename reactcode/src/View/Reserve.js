import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import axios from "axios"
import { useParams } from 'react-router-dom';

function Reserve() {
  const [rooms, saverooms] = useState([]);
  const [loading, saveloading] = useState();
  const [error, saveerror] = useState();
  const {roomid}= useParams();
  useEffect(() => async function Reserve() {
      try {
          saveloading(true);
          const data = (await axios.post('/getroom/getroombyid', {roomid:roomid})).data;
          saverooms(data);
          saveloading(false);
      } catch (error) {
          saveerror(true);
          console.log(error);
          saveloading(false);
      }
      Reserve();
  }, [])
  return (
    <div>
        <h1>Reserve</h1>
        <h1>room id= {roomid}</h1>
=======

function Reserve() {
  return (
    <div>
        <h1>Reserve</h1>
>>>>>>> 2468531c5c9518bf4e8957c0b2033dc0c05648ca
    </div>
  )
}

<<<<<<< HEAD
export default Reserve
=======
export default Reserve
//hi
>>>>>>> 2468531c5c9518bf4e8957c0b2033dc0c05648ca
