import React from 'react';
import ListView from '../common/ListView';

function TeachersList(props) {

    const teachers = [{ "id": 1, "name": "Parul", "email": "paruldhoundiyal07@gmail.com", "mobile": "8375083217", "status": "Active", "Teaching Course": "Megamind", "Action": "Detail" },
    { "id": 2, "name": "Anshul", "email": "anshulagarwal03@gmail.com", "mobile": "9027687148", "status": "Active", "Teaching Course": "Megamind", "Action": "Detail" }];



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
                label: "Teachers",
                span: 2,
                class: "profile-header-title"
            },

        ],
        table: {
            header: [
                "Name", "Email", "Mobile", "Status", "Teaching Course", "Action"
            ],
            list: teachers,
            action: props.handleActionClick,
            actionClass: "action-button",
        }

    }

    return (
        <ListView items={list} />

    )
}

export default TeachersList;