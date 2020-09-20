import React, { useEffect, useState } from 'react';
import roles from '../../static/roles.json'
import ListView from '../common/ListView';
import { REST_API, BASE_URL } from '../../Constants';

function UsersList(props) {

    const [users, setUsers] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const getUsers = () => {
        var API = REST_API.GET_USERS_LIST;
        fetch(BASE_URL + API.url)
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(res);
                    const usersList = [{ "id": 1, "name": "Parul", "mobile": "8375083217", "email": "paruldhoundiyal07@gmail.com", "Dob": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
                    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];
                    setUsers(usersList);
                    setTotalPages(2);
                },
                (error) => {
                    console.log(error);
                    const usersList = [{ "id": 1, "name": "Parul", "phone": "8375083217", "email": "paruldhoundiyal07@gmail.com", "DoB": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
                    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];
                    setUsers(usersList);
                    setTotalPages(2);
                });
    }
    useEffect(() => {
        getUsers();
    }, []);


    const filterUsers = (e) => {
        var API = REST_API.GET_USERS_LIST;
        fetch(BASE_URL + API.url + "?id=1")
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(res);
                    const usersList = [{ "id": 1, "name": "Parul", "mobile": "8375083217", "email": "paruldhoundiyal07@gmail.com", "Dob": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
                    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];
                    setUsers(usersList)
                },
                (error) => {
                    console.log(error);
                    const usersList = [{ "id": 1, "name": "Parul", "phone": "8375083217", "email": "paruldhoundiyal07@gmail.com", "DoB": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
                    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];
                    setUsers(usersList);
                });
    }

    const searchUsers = (e) => {
        console.log(e.target.value);
    }

    const handlePageChange = (pageNo) => {
        console.log(pageNo);
        setActivePage(pageNo);
    }


    const list = {
        header: [
            {
                type: "label",
                label: "List of Users",
                span: 2,
                className: "profile-header-title"
            },
            {
                type: "select",
                placeholder: "Role",
                span: 2,
                offset: 3,
                options: roles,
                onChange: filterUsers,
                className: "header-select"
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
        divider: true,
        table: {
            header: [
                "Name", "Phone", "Email", "DoB", "Dial Code", "Role"
            ],
            linkName: "Action",
            list: users,
            action: props.handleActionClick,
            actionClass: "action-button",
        },
        paging: {
            totalPages: totalPages,
            activePage: activePage,
            handlePagination: handlePageChange,
        }


    }



    return (
        <ListView items={list} />

    )
}

export default UsersList;