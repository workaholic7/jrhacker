import React, {useState} from 'react'
import roles from '../../../static/roles.json'
import CustomModal from '../../common/CustomModal';
import { Suspense} from 'react';
import { REST_API, BASE_URL } from '../../../Constants';
const ConfirmAssignRoleModal = React.lazy(() => import('./ConfirmAssignRoleModal'));

function AssignRoleModal(props) {
    const [formData, setFormData] = useState({modifiedBy: "1", userId:props.userId, role:''});
    const [success, isSuccess] = useState(true);
    const [message, setMessage] = useState('');
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const closeConfirmationDialogModal = () => setShowConfirmationDialog(false);
    const showConfirmationDialogModal = () => setShowConfirmationDialog(true);

    const handleRoleChange = (e) => {
        const {value} = e.target;
        var data = formData;
        data.role = value;
        setFormData(data);
    }

    const showConfirmationModal = () => {
        props.close();
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

    const assignRoleFields = [
        {
            type: "select",
            label: "Role",
            labelSpan: "2",
            placeholder: "Role",
            span: "10",
            offset: 0,
            options: roles,
        }
    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Assign Role",
        class: "custom-modal-title",
        fields: assignRoleFields,
        onChange: handleRoleChange,
        buttons: [
            {
                label: "Cancel",
                span: 6,
                onClick: props.close,
                class: "modal-button"
            },
            {
                label: "Save",
                span: 6,
                class: "modal-button modal-submit-button",
                onClick: showConfirmationModal
            }
        ]

    }

    return (
        <>
        <CustomModal items={fields} />
        <Suspense fallback={<div>Loading...</div>}>
                <ConfirmAssignRoleModal onSubmit={handleRoleSubmit} show={showConfirmationDialog} close={closeConfirmationDialogModal} />
            </Suspense>
        </>
    );
}

export default AssignRoleModal;