import React, { useState, useEffect } from 'react'
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
    </div>
  )
}

export default Reserve