import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'antd/dist/antd.css';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import Room from '../Component/Room';

const { RangePicker } = DatePicker;

function Home() {
    const [rooms, saverooms] = useState([]);
    const [loading, saveloading] = useState();
    const [error, saveerror] = useState();
    const [checkin, savecheckin] = useState();
    const [checkout, savecheckout] = useState();
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
        fetchData();
    }, [])

    function date(bookingdates)
    {
        savecheckin(moment(bookingdates[0]).format('MMM Do YYYY, dddd'));
        savecheckout(moment(bookingdates[1]).format('MMM Do YYYY, dddd'));
    }

    return (
        <div className='row'>
            <div className='col-md-5'>
                    <RangePicker showTime format="MM-DD-YYYY" onChange={date}/>                   
            </div>
            <div className='row justify-content-centre'>
                {error ? (<h1>error</h1>) : rooms.map(room => {
                    return <div className='com-md-9'>
                        <Room room={room} checkin={checkin} checkout={checkout}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home