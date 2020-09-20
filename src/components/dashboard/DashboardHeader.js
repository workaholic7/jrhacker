import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL, REST_API } from '../../Constants';
import Header from '../common/Header';
import UserContext from '../UserContext';
import { getUserRole } from '../Util';

export default function DashboardHeader() {

    const [user, setUser] = useState({});
    const [userId] = useContext(UserContext);

    const getUser = () => {
        var API = REST_API.GET_USER_BY_ID;
        fetch(BASE_URL + API.url.replace("{id}", userId),
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
        getUser();
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
                    className: "custom-button profile-header-button"
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
        <Header items={items} />
    )
}
