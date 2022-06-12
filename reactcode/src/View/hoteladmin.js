import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import axios from "axios";

const { TabPane } = Tabs;
function Hoteladmin() {
    return (
        <div className='mt-3 ml-3 bs'>
            <h1 className='text-center'>Hotel Admin</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Rooms" key="1">
                    <AllRooms/>
                </TabPane>
                <TabPane tab="Add new room" key="2">
                    <AddRooms />
                </TabPane>
                <TabPane tab="Reservations" key="3">
                    <ReservedRooms />
                </TabPane>
                <TabPane tab="Users" key="4">
                    <AllUsers/>
                </TabPane>
            </Tabs>
        </div>)
}
export default Hoteladmin

export function ReservedRooms() {
    const [reservation, savereservation] = useState([]);
    const [loading, saveloading] = useState();
    const [error, saveerror] = useState();
    useEffect(() => async function () {
        try {
            saveloading(true);
            const data = (await axios.get('/reservation/reservenow')).data;
            savereservation(data);
            console.log(reservation);
            saveloading(false);
        } catch (error) {
            saveerror(true);
            console.log(error);
            saveloading(false);
        }
    }, [])
    return (
        <div className='row'>
            <div className='col-md-8'>
                <h1>Reservations</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Reservation Id</th>
                            <th>User Id</th>
                            <th>Room Number</th>
                            <th>Checkin</th>
                            <th>Checkout</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>
                    {reservation && (reservation.map(reser =>{
                        return <tr>
                                <td>{reser._id}</td>
                                <td>{reser.userid}</td>
                                <td>{reser.roomNumber}</td>
                                <td>{reser.checkin}</td>
                                <td>{reser.checkout}</td>
                                <td>{reser.totalpayment}</td>
                            </tr>
                      }))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}


export function AddRooms() {
    useEffect(() => async function () {
        try {
           
        } catch (error) {
           
        }
    }, [])
    return (
     <h1></h1>   
    )
}


export function AllRooms() {
    useEffect(() => async function () {
        try {
           
        } catch (error) {
           
        }
    }, [])
    return (
        <h1></h1>
    )
}

export function AllUsers() {
    useEffect(() => async function () {
        try {
           
        } catch (error) {
           
        }
    }, [])
    return (
        <div className='row'>

        <div className='col-md-8'>

            <h1>Users</h1>

            <table>

                <thead>

                    <tr>

                        <th>User Id</th>

                        <th>User Name</th>

                        <th>Email</th>

                    </tr>

                </thead>



                <tbody>

               

                <tr>

                            <td></td>

                            <td></td>

                            <td></td>

                        </tr>

                </tbody>

            </table>

        </div>

    </div>
    )
}