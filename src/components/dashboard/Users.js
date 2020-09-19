import React, { useState } from 'react';
import { Suspense} from 'react';
import { REST_API, BASE_URL } from '../../Constants';

const AddNewMemberModal = React.lazy(() => import('./modal/AddNewMemberModal'));
const AssignRoleModal = React.lazy(() => import('./modal/AssignRoleModal'));
const ConfirmAssignRoleModal = React.lazy(() => import('./modal/ConfirmAssignRoleModal'));
const UsersList = React.lazy(() => import('./UsersList'));

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


    //TODO change to 
    const [formData, setFormData] = useState({modifiedBy: "1", userId:'', role:''});
    const [success, isSuccess] = useState(true);
    const [message, setMessage] = useState('');
    const handleActionClick = (id) => {
        var data = formData;
        data.userId = id;
        setFormData(data);
        showAssignRoleModal();
    }

    const handleRoleChange = (e) => {
        const {value} = e.target;
        var data = formData;
        data.role = value;
        setFormData(data);
        showAssignRoleModal();
    }

    const showConfirmationModal = () => {
        closeAssignRoleModal();
        showConfirmationDialogModal();
    }

    const handleRoleSubmit = (e)=>{
        e.preventDefault();
        let API = REST_API.CHANGE_ROLE;
        fetch(BASE_URL + API.url, { method: API.method,headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(formData),
        }})
            .then(
                res => {return res.json()})
            .then(
                (res) => {
                    console.log(res);
                    if(res.status){
                        isSuccess(true);
                        setMessage(res.response);
                    } else{
                        isSuccess(false);
                        setMessage(res.response);
                    }
                },
                (error) => {
                    console.log(error);
                    isSuccess(false);
                    setMessage("Some error occurred. Please try again");
                });
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
                <AssignRoleModal show={showAssignRole} close={closeAssignRoleModal} showConfirmationModal={showConfirmationModal} onChange={handleRoleChange}/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ConfirmAssignRoleModal onSubmit={handleRoleSubmit} show={showConfirmationDialog} close={closeConfirmationDialogModal} />
            </Suspense>
        </>
    )
}

export default Users;