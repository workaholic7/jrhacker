import React, { useState } from 'react';
import { BASE_URL, REST_API } from '../../../Constants';
import roles from '../../../static/roles.json';
import CustomModal from '../../common/CustomModal';
const ConfirmAssignRoleModal = React.lazy(() => import('./ConfirmAssignRoleModal'));

function AssignRoleModal(props) {
    const [formData, setFormData] = useState({modifiedBy: "1", userId:props.userId, role:''});
    const [formResult, setFormResult] = useState({success:false, message:''});
    const [error, setError]= useState({role:''});
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
        if(formData.role !==""){
            props.close();
            showConfirmationDialogModal();
        } else{
            setError({role:"Please select role"});
        }
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
                        props.close();
                    } else{
                        setFormResult({success: false, message: res.response});
                    }
                },
                (error) => {
                    console.log(error);
                    setFormResult({success: false, message: "Some error occurred. Please try again."});
                }
            );
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
        errors: error,
        buttons: [
            {
                label: "Cancel",
                span: 6,
                onClick: props.close,
                className: "modal-button"
            },
            {
                label: "Save",
                span: 6,
                className: "modal-button modal-submit-button",
                onClick: showConfirmationModal
            }
        ]
    }

    return (
        <>
            <CustomModal items={fields} />
            <ConfirmAssignRoleModal formResult={formResult} onSubmit={handleRoleSubmit} show={showConfirmationDialog} close={closeConfirmationDialogModal} />
        </>
    );
}

export default AssignRoleModal;