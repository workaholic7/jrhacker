import React, {useContext} from 'react';

import NotificationHeader from './navbar/NotificationHeader';
import { Router } from "@reach/router";
import Dashboard from '../components/dashboard/Dashboard';
import Students from '../components/student/Students';
import TeachersSlot from './TeachersSlot';
import Session from './Session';
import PaySlip from './PaySlip';
import Logout from './Logout';
import { Container } from 'react-bootstrap';
import SideBar from '../components/navbar/SideBar';
import Teacher from './teacher/Teacher';
import {UserContext} from '../App'

export default function Main() {
    const { id, role } = useContext(UserContext);

    
    return (
        <div>
            <SideBar />
            {/* <NotificationHeader count="0"/> */}
            <Router className="main" style={styles.content} >

                <Dashboard path="/" />
                <Students path="/students" />
                <Teacher path="/teachers" />
                <TeachersSlot path="/teachers/slot" />
                <Session path="/session" />
                <PaySlip path="/payslip" />
                <Logout path="/logout" />
            </Router>
        </div>
    )
}

const styles = {
    

    content: {

    }
}

