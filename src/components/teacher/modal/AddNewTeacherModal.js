import React from 'react'
import roles from '../../../static/roles.json'
import CustomModal from '../../common/CustomModal';

function AddNewTeacherModal(props) {
    const modalFields = [{ name: "name", label: "Name", placeholder: "Type name of student", type: "input" },
    { name: "email", label: "Email", placeholder: "Type email of user", type: "input" },
    { "name": "countryCode", "label": "Country Code", "placeholder": "Enter country code", type: "input" },
    { "name": "mobileNumber", "label": "Mobile Number", "placeholder": "Enter Mobile Number", type: "input" },
    { "name": "state", "label": "State", labelSpan: 12, span: 12, "placeholder": "State", "type": "select", "options": roles },
    { "name": "city", "label": "City", labelSpan: 12, span: 12, "placeholder": "City", "type": "select", "options": roles },
    { name: "pincode", label: "Pin Code", placeholder: "Zip code", type: "input" }
    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Add New Member",
        class: "custom-modal-title",
        fields: modalFields,
        buttons: [

            {
                label: "Next",
                span: 4,
                offset: 4,
                class: "modal-button"
            }
        ]

    }

    return (
        <CustomModal items={fields} />
    );
}

export default AddNewTeacherModal;