import React, { useState } from 'react';
import { Suspense} from 'react';

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
    

    //TODO change to 
    
    const handleActionClick = (id) => {
        setUserId(id);
        showAssignRoleModal();
    }

    


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <UsersList handleActionClick={handleActionClick} showAddNewMemberModal={showAddNewMemberModal} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AddNewMemberModal show={showAddNewMember} close={closeAddNewMemberModal} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AssignRoleModal userId={userId} show={showAssignRole} close={closeAssignRoleModal} />
            </Suspense>
        </>
    )
}

export default Users;