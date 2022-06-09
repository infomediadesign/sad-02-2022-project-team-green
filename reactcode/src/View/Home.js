import React, { useState, useEffect } from 'react'
import axios from "axios"
import Room from '../Component/Room';

function Home() {
    const [rooms, saverooms] = useState([]);
    const [loading, saveloading] = useState();
    const [error, saveerror] = useState();
    useEffect(() => async function fetchData() {
        try {
            saveloading(true);
            const data = (await axios.get('/getroom/getRooms')).data;
            saverooms(data);
            saveloading(false);
        } catch (error) {
            saveerror(true);
            console.log(error);
            saveloading(false);
        }
<<<<<<< HEAD
        fetchData();
=======
        fetchData()
>>>>>>> 2468531c5c9518bf4e8957c0b2033dc0c05648ca
    }, [])

    return (
        <div className='container'>
        <div className='row justify-content-centre'>
<<<<<<< HEAD
        {loading? (<h1>loading..</h1>) : error ? (<h1>error</h1>) : rooms.map(room => {
=======
            {error ? (<h1>error</h1>) : rooms.map(room => {
>>>>>>> 2468531c5c9518bf4e8957c0b2033dc0c05648ca
                return <div className='com-md-9'>
                    <Room room={room}/>
                </div>
            })}
        </div>
        </div>
    )
}

export default Home