import React from 'react';
import roles from '../../static/roles.json'
import ListView from '../common/ListView';

function UsersList(props) {

    const users = [{ "id": 1, "name": "Parul", "phone": "8375083217", "email": "paruldhoundiyal07@gmail.com", "DoB": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];



    const filterUsers = (e) => {
        console.log(e.target.value);
    }

    const searchUsers = (e) => {
        console.log(e.target.value);
    }

    const list = {
        header: [
            {
                type: "label",
                label: "List of Users",
                span: 2,
                class: "profile-header-title"
            },
            {
                type: "dropdown",
                placeholder: "Role",
                span: 2,
                offset: 3,
                options: roles,
                onChange: filterUsers,
            },
            {
                type: "input",
                placeholder: "Search",
                span: 3,
                onChange: searchUsers,
            },
            {
                type: "button",
                label: "Add new Member",
                span: 2,
                offset: 0,
                onClick: props.showAddNewMemberModal,
                class: "custom-button profile-header-button"
            }
        ],
        table: {
            header: [
                "Name", "Phone", "Email", "DoB", "Dial Code", "Role"
            ],
            list: users,
            action: props.handleActionClick,
            actionClass: "action-button",
        }

    }

    return (
        <ListView items={list} />

    )
}

export default UsersList;