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
                    <h1>Rooms</h1>
                </TabPane>
                <TabPane tab="Add new room" key="2">
                    <h1>Add New Room</h1>
                </TabPane>
                <TabPane tab="Reservations" key="3">
                    <ReservedRooms />
                </TabPane>
                <TabPane tab="Users" key="4">
                    <h1>Users</h1>
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

                         <tr>

                                <td></td>

                                <td></td>

                                <td></td>

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