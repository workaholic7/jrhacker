import React from 'react';
import UsersList from './UsersList';
import { CONSTANTS } from '../../Constants';
import DashboardHeader from './DashboardHeader';

function Dashboard() {

    
    return (
        <>
            <DashboardHeader />
            <UsersList />
        </>
    )
}

export default Dashboard;