import React from 'react'
import ListView from '../common/ListView';

export default function StudentsList() {

    const users = [{ "id": 1, "name": "Parul", "phone": "8375083217", "email": "paruldhoundiyal07@gmail.com", "DoB": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];

    const list = {
        header: [
            {
                type: "label",
                label: "Students",
                span: 2,
                class: "profile-header-title"
            }
        ],
        table: {
            header: [
                "Name", "Parents Name", "Mobile", "Email", "Type", "Teacher Name", "Teacher Email", "Action"
            ],
            list: users,
            // action: props.handleActionClick,
            actionClass: "action-button",
        }

    }
    return (
        <ListView items={list} />
    )
}
