import React, { useState } from 'react';
import AddNewMemberModal from './modal/AddNewMemberModal';
import AssignRoleModal from './modal/AssignRoleModal';
import ConfirmAssignRoleModal from './modal/ConfirmAssignRoleModal';
import UsersList from './UsersList';

function Teachers() {


    return (
        <>
            <UsersList handleActionClick={handleActionClick} showAddNewMemberModal={showAddNewMemberModal} />
        </>

    )
}

export default Teachers;