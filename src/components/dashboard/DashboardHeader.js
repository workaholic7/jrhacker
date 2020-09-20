import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import { REST_API, BASE_URL } from '../../Constants';
import { getUserRole } from '../Util';
import ReactLoading from 'react-loading';

export default function DashboardHeader() {

    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const getUser = (id) => {
        var API = REST_API.GET_USER_BY_ID;
        fetch(BASE_URL + API.url.replace("{id}", id),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                return res.json()
            }).then(
                (response) => {
                    console.log(response);
                    if (response.status) {
                        let user = response.response[0];
                        user.role = getUserRole(user.role);
                        setUser(user);
                        setLoading(false);
                    }

                },
                (error) => {
                    console.log(error);
                    var user = {
                        "name": "Parul Sharma", "email": "paruldhoundiyal07@Gmail.com",
                        dialCode: " +91", mobile: "8375083217", role: "Super Admin"
                    };
                    setUser(user);
                });
    }
    useEffect(() => {
        getUser(1);
    }, []);

    const items = {
        class: "dashboard-container",
        rowClass: "dashboard-header-row",
        key: "OperationDashboard",
        header: [
            [
                {
                    type: "label",
                    label: "Logged in user profile",
                    span: 4,
                    class: "profile-header-title"
                },
                {
                    type: "button",
                    label: "Update Profile",
                    span: 2,
                    offset: 6,
                    class: "custom-button profile-header-button"
                }
            ]
        ],
        divider: true,
        rows: [
            {
                row: [
                    {
                        text: "Email",
                        class: "profile-label",
                        span: "2",
                        offset: "0",

                    },
                    {
                        text: user.email,
                        class: "profile-text",
                        span: "3",
                        offset: "0"
                    },
                    {
                        text: "User Role",
                        class: "profile-label",
                        span: "2",
                        offset: "0"
                    },
                    {
                        text: user.role,
                        class: "profile-text",
                        span: "3",
                        offset: "0"
                    }

                ]
            },
            {
                row: [
                    {
                        text: "Dial Code",
                        class: "profile-label",
                        span: "2",
                        offset: "0"
                    },
                    {
                        text: user.dialCode,
                        class: "profile-text",
                        span: "3",
                        offset: "0"
                    }
                ]
            },
            {
                row: [
                    {
                        text: "Mobile",
                        class: "profile-label",
                        span: "2",
                        offset: "0"
                    },
                    {
                        text: user.mobile,
                        class: "profile-text",
                        span: "3",
                        offset: "0"
                    }
                ]
            }
        ]
    }



    return (
        <>
        {isLoading? <ReactLoading type="spinningBubbles" className="loading" />:
        <Header items={items} />}
        </>
    )
}
