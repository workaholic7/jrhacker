import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomButton from '../common/CustomButton';
import Cell from '../common/Cell';
import Styles from '../common/Styles';
import FormSelect from '../common/FormSelect';
import TableView from '../common/TableView';
import Divider from '../common/Divider';
import CustomModal from '../common/CustomModal';
import roles from '../../static/roles.json'
import ListView from '../common/ListView';

function UsersList({ buttonText }) {
    const [showAddNewMember, setShowAddNewMember] = useState(false);
    const [showAssignRole, setShowAssignRole] = useState(false);
    const closeAddNewMemberModal = () => setShowAddNewMember(false);
    const showAddNewMemberModal = () => setShowAddNewMember(true);
    const closeAssignRoleModal = () => setShowAssignRole(false);
    const showAssignRoleModal = () => setShowAssignRole(true);

    const handleActionClick = (id) => {
        showAssignRoleModal();
    }


    

    const tableHeader = ["Name", "Phone", "Email", "DoB", "Dial Code", "Role"];

    const users = [{ "id": 1, "name": "Parul", "phone": "8375083217", "email": "paruldhoundiyal07@gmail.com", "DoB": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];

    const modalFields = [{ "name": "Name", "label": "Name", "placeholder": "Type name of user" },
    { "name": "email", "label": "Email", "placeholder": "Type email of user" },
    { "name": "countryCode", "label": "Country Code", "placeholder": "Enter country code" },
    { "name": "mobileNumber", "label": "Mobile Number", "placeholder": "Enter Mobile Number" },
    { "name": "role", "label": "Role", "placeholder": "Select role of user", "type": "select", "options": roles },
    { "name": "dob", "label": "DoB", "placeholder": "Type name of user" },
    ];

    const assignRoleFields = [{ "name": "role", "label": "Role", "placeholder": "", "type": "select", "options": roles }
    ];

    const filterUsers = (e) =>{
        console.log(e.target.value);
    }

    const searchUsers = (e) =>{
        console.log(e.target.value);
    }

    const list={
        header:[
            {   type:"label",
                label:"List of Users",
                span: 2,
                class:"profile-header-title"
            },
            { type:"dropdown",
                placeholder: "Role",
                span: 3,
                offset: 2,
                options: roles,
                onChange: filterUsers,
            },
            { type:"input",
                placeholder: "Search",
                span: 3,
                onChange: searchUsers,
            },
            { type:"button",
                label:"Add new Member",
                span: 2,
                offset: 0,
                onClick: showAddNewMemberModal,
                class:"custom-button profile-header-button"
            }
        ],
        table:{
            header:[
                "Name", "Phone", "Email", "DoB", "Dial Code", "Role"
            ],
            list:users,
            action: handleActionClick,
            actionClass: "action-button",
        }
        
    }
    return (
        <>
            <ListView items={list}/>
            
            <CustomModal name="Add New Member" show={showAddNewMember} close={closeAddNewMemberModal} modalFields={modalFields} />
            <CustomModal name="Assign Role" show={showAssignRole} close={closeAssignRoleModal} modalFields={assignRoleFields} />
        </>

    )
}

export default UsersList;