import React from 'react'
import Header from '../common/Header'

export default function DashboardHeader() {
    const items = {
        class: "dashboard-container",
        rowClass: "dashboard-header-row",
        divider: true,
        header: [
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
        ],
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
                        text: "paruldhouxcxzczxczxczndiyal07@gmail.com",
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
                        text: "Super Admin",
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
                        text: "+91",
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
                        text: "+91",
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
