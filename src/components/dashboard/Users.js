import React, { Suspense, useState } from 'react';
import Loading from 'react-loading';

const AddNewMemberModal = React.lazy(() => import('./modal/AddNewMemberModal'));
const AssignRoleModal = React.lazy(() => import('./modal/AssignRoleModal'));
const UsersList = React.lazy(() => import('./UsersList'));

function Users() {
    const [userId, setUserId] = useState();
    const [showAddNewMember, setShowAddNewMember] = useState(false);
    const [showAssignRole, setShowAssignRole] = useState(false);
    const closeAddNewMemberModal = () => setShowAddNewMember(false);
    const showAddNewMemberModal = () => setShowAddNewMember(true);
    const closeAssignRoleModal = () => setShowAssignRole(false);
    const showAssignRoleModal = () => setShowAssignRole(true);

    const handleActionClick = (id) => {
        setUserId(id);
        showAssignRoleModal();
    }

    return (
        <>
            <UsersList handleActionClick={handleActionClick} showAddNewMemberModal={showAddNewMemberModal} />
            {showAddNewMember &&
                <AddNewMemberModal show={showAddNewMember} close={closeAddNewMemberModal} />}
            <AssignRoleModal userId={userId} show={showAssignRole} close={closeAssignRoleModal} />
        </>
    )
}

export default Users;