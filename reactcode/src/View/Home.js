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
        fetchData()
    }, [])

    return (
        <div className='container'>
        <div className='row justify-content-centre'>
            {error ? (<h1>error</h1>) : rooms.map(room => {
                return <div className='com-md-9'>
                    <Room room={room}/>
                </div>
            })}
        </div>
        </div>
    )
}

export default Home