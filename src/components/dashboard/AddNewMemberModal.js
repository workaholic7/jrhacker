import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import roles from '../../static/roles.json'
import CustomModal from '../common/CustomModal';

function AddNewMemberModal(props) {
    const modalFields = [{ name: "name", label: "Name", placeholder: "Type name of user", type: "input" },
    { name: "email", label: "Email", placeholder: "Type email of user", type: "input" },
    { "name": "countryCode", "label": "Country Code", "placeholder": "Enter country code", type: "input" },
    { "name": "mobileNumber", "label": "Mobile Number", "placeholder": "Enter Mobile Number", type: "input" },
    { "name": "role", "label": "Role", labelSpan: 12, span: 12, "placeholder": "Select role of user", "type": "select", "options": roles },
    { "name": "dob", "label": "DoB", "placeholder": "Type name of user", type: "dob" },
    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Add New Member",
        class: "custom-modal-title",
        fields: modalFields,
        buttons: [
            {
                label: "Cancel",
                span: 3,
                offset: 3,
                onClick: props.close,
                class: "modal-button"
            },
            {
                label: "Save",
                span: 3,
                class: "modal-button modal-submit-button"
            }
        ]

    }

    return (
        <CustomModal items={fields} />
    );
}

export default AddNewMemberModal;