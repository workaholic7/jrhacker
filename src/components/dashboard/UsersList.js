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
import AddNewMemberModal from './AddNewMemberModal';
import AssignRoleModal from './AssignRoleModal';
import ConfirmAssignRoleModal from './ConfirmAssignRoleModal';

function UsersList({ buttonText }) {
    const [showAddNewMember, setShowAddNewMember] = useState(false);
    const [showAssignRole, setShowAssignRole] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const closeAddNewMemberModal = () => setShowAddNewMember(false);
    const showAddNewMemberModal = () => setShowAddNewMember(true);
    const closeAssignRoleModal = () => setShowAssignRole(false);
    const showAssignRoleModal = () => setShowAssignRole(true);
    const closeConfirmationDialogModal = () => setShowConfirmationDialog(false);
    const showConfirmationDialogModal = () => setShowConfirmationDialog(true);

    const handleActionClick = (id) => {
        showAssignRoleModal();
    }

    const showConfirmationModal = () => {
        closeAssignRoleModal();
        showConfirmationDialogModal();
    }
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
                onClick: showAddNewMemberModal,
                class: "custom-button profile-header-button"
            }
        ],
        table: {
            header: [
                "Name", "Phone", "Email", "DoB", "Dial Code", "Role"
            ],
            list: users,
            action: handleActionClick,
            actionClass: "action-button",
        }

    }

    return (
        <>
            <ListView items={list} />
            <AddNewMemberModal show={showAddNewMember} close={closeAddNewMemberModal} />
            <AssignRoleModal show={showAssignRole} close={closeAssignRoleModal} showConfirmationModal={showConfirmationModal} />
            <ConfirmAssignRoleModal show={showConfirmationDialog} close={closeConfirmationDialogModal} />
            {/* <CustomModal name="Add New Member" show={showAddNewMember} close={closeAddNewMemberModal} modalFields={modalFields} firstButtonText="Cancel" secondButtonText="Save" /> */}
            {/* <CustomModal name="Assign Role" show={showAssignRole} close={closeAssignRoleModal} modalFields={assignRoleFields} firstButtonText="Cancel" secondButtonText="Save" onSubmit={showConfirmationDialogModal} />
            <CustomModal name="Confirmation" show={showConfirmationDialog} close={closeConfirmationDialogModal} modalFields={assignRoleFields} firstButtonText="No" secondButtonText="Yes, Change role" /> */}
        </>

    )
}

export default UsersList;