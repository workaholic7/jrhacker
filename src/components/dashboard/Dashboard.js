import React from 'react';
import UserHeader from './UserHeader'
import Users from './Users';
import { CONSTANTS } from '../../Constants';

function Dashboard() {

    const config={
        header:{
            label:{
                label:CONSTANTS.USER_HEADER_TEXT,
                span: 4
            },
            button:{
                label:"Update Profile",
                span: 2,
                offset: 6,
                class:"custom-button"
            }
        }, 
        rows:[
                {
                    row: [
                        {
                            text: "Email",
                            class: "label",
                            span: "2",
                            offset: "0"
                        },
                        {
                            text: "abc@gmail.com",
                            class: "label",
                            span: "3",
                            offset: "0"
                        },
                        {
                            text: "User Role",
                            class: "label",
                            span: "2",
                            offset: "0"
                        },
                        {
                            text: "Super Admin",
                            class: "label",
                            span: "3",
                            offset: "0"
                        }

                    ]
                },
                {
                    row: [
                        {
                            text: "Dial Code",
                            class: "label",
                            span: "2",
                            offset: "0"
                        },
                        {
                            text: "+91",
                            class: "label",
                            span: "3",
                            offset: "0"
                        }
                    ]
                },
                {
                    row: [
                        {
                            text: "Mobile",
                            class: "label",
                            span: "2",
                            offset: "0"
                        },
                        {
                            text: "+91",
                            class: "label",
                            span: "3",
                            offset: "0"
                        }
                    ]
                }
            ]
    }
    return (
        <>
            <UserHeader items={config}/>
            <Users buttonText="Add New Member" span="3" offset="5" />
        </>
    )
}

export default Dashboard;