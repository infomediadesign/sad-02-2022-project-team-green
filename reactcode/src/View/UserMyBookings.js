import axios from 'axios';
import React,{useState,useEffect} from 'react'

function UserMyBookings() {
  const [myownbookings, savemyownbookings] = useState([]);
    const currentuser = JSON.parse(localStorage.getItem('user'))    
    useEffect(( ) => async function(){
      const my= await (await axios.post('/reservation/mybookings',{userid:currentuser._id})).data;
      savemyownbookings(my);
    },[])
  return (
    <div className='container'>
      <div className='row mt-2'>
        <div className='col-md-8'>
                {myownbookings && (myownbookings.map(book =>{
                 return  <div className='bsw'>
                  <h1>Room Number : {book.roomNumber}</h1>
                  <p>Booking Id : {book._id}</p>
                  <p>Checkin    : {book.checkin}</p>
                  <p>Checkout   : {book.checkout}</p>
                  <p>Payment(€) : {book.totalpayment}</p>
                  <p>Status     : {book.status == "reserved" ? "Reserved" : "cancelled"}</p>
                 </div>
                }))}
        </div>
      </div>
    </div>
  )
}

export default UserMyBookings