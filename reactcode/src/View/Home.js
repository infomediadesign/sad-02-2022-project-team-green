import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'antd/dist/antd.css';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import Room from '../Component/Room';

const { RangePicker } = DatePicker;
var roomavail = [];
function Home() {
    const [rooms, saverooms] = useState([]);
    const [temprooms, savetemprooms] = useState([]);
    const [loading, saveloading] = useState();
    const [error, saveerror] = useState();
    const [checkin, savecheckin] = useState();
    const [checkout, savecheckout] = useState();
    useEffect(() => async function fetchData() {
        try {
            saveloading(true);
            const data = (await axios.get('/getroom/getRooms')).data;
            saverooms(data);
            savetemprooms(data);
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
        var avail = false;
        for( const rooms of temprooms){
            if(rooms.bookings.length >0){
                for(const booking of rooms.bookings){
                    if(!moment(moment(bookingdates[0]).format('MMM Do YYYY, dddd')).isBetween(booking.checkin,booking.checkout) && !moment(moment(bookingdates[1]).format('MMM Do YYYY, dddd')).isBetween(booking.checkin,booking.checkout)){
                        if(((moment(bookingdates[0]).format('MMM Do YYYY, dddd')) !== booking.checkin)&&((moment(bookingdates[0]).format('MMM Do YYYY, dddd')) !== booking.checkout)&&((moment(bookingdates[1]).format('MMM Do YYYY, dddd')) !== booking.checkin)&&((moment(bookingdates[1]).format('MMM Do YYYY, dddd')) !== booking.checkout)){
                            avail =true;
                        }
                    }
                }                    
            }
            if(avail == true || rooms.bookings.length == 0){
                roomavail.push(rooms);
            }
            saverooms(roomavail);
            console.log(roomavail);
            console.log(rooms);
        }
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