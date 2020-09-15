import React from 'react';
import UserHeader from './UserHeader'
import Users from './Users';

function Teacher() {

    const config = {

    }
    return (
        <>
            <UserHeader buttonText="Update Profile" span="2" offset="6" />
            <Users buttonText="Add New Member" span="3" offset="5" />
        </>
    )
}

export default Teacher;