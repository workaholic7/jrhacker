import React from 'react';
import UserHeader from '../../common/UserHeader'
import Users from './Users';

function Dashboard() {
    return (
        <>
            <UserHeader buttonText="Update Profile" span="2" offset="6" />
            <Users buttonText="Add New Member" span="3" offset="5" />
        </>
    )
}

export default Dashboard;