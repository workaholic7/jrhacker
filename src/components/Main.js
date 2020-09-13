import React from 'react';

import NotificationHeader from './navbar/NotificationHeader';
import { Router } from "@reach/router";
import Dashboard from '../components/dashboard/Dashboard';
import Students from '../components/student/Students';
import Teachers from './Teachers';
import TeachersSlot from './TeachersSlot';
import Session from './Session';
import PaySlip from './PaySlip';
import Logout from './Logout';
import { Container } from 'react-bootstrap';
import SideBar from '../components/navbar/SideBar';

export default function Main() {
    return (
        <div style={styles.body} >
            <SideBar />
            {/* <NotificationHeader count="0"/> */}
            <Router className="main" style={styles.content} >
            
                <Dashboard path="/" />
                <Students path="/students" />
                <Teachers path="/teachers" />
                <TeachersSlot path="/teachers/slot" />
                <Session path="/session"/>
                <PaySlip path="/payslip"/>
                <Logout path="/logout"/>
            </Router>
        </div>
    )
}

const styles ={
    body: {
        position : 'fixed',
        width: '100%',
        height: '100%',
    },

    content:{
        
    }
}

