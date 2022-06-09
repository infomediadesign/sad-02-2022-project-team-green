import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;
function admin() {
    return (
        <div className='mt-3 ml-3 bs'>
            <h1> Hotel Management</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Rooms" key="1">
                    <h1>Rooms</h1>
                </TabPane>
                <TabPane tab="Add new room" key="2">
                    <h1>Add New Room</h1>
                </TabPane>
                <TabPane tab="Bookings" key="3">
                    <h1>Bookings</h1>
                </TabPane>
                <TabPane tab="Users" key="4">
                    <h1>Users</h1>
                </TabPane>
            </Tabs>
        </div>   )
}

export default admin