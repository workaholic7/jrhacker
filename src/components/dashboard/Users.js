import React, { useState } from 'react';
import AddNewMemberModal from './modal/AddNewMemberModal';
import AssignRoleModal from './modal/AssignRoleModal';
import ConfirmAssignRoleModal from './modal/ConfirmAssignRoleModal';
import UsersList from './UsersList';

function Users() {
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


    return (
        <>
            <UsersList handleActionClick={handleActionClick} showAddNewMemberModal={showAddNewMemberModal} />
            <AddNewMemberModal show={showAddNewMember} close={closeAddNewMemberModal} />
            <AssignRoleModal show={showAssignRole} close={closeAssignRoleModal} showConfirmationModal={showConfirmationModal} />
            <ConfirmAssignRoleModal show={showConfirmationDialog} close={closeConfirmationDialogModal} />
        </>

    )
}

export default Users;