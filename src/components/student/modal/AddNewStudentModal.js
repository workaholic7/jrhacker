import React from 'react'
import CustomModal from '../../common/CustomModal';
import types from '../../../static/studentTypes.json';

export default function AddNewStudentModal(props) {
    const modalFields = [{ name: "name", label: "Name", placeholder: "Type name of user", type: "input" },
    { name: "email", label: "Email", placeholder: "Type email of user", type: "input" },
    { "name": "mobile", "label": "Mobile", "placeholder": "Type Mobile Number", type: "input" },
    { "name": "parentsName", "label": "Parentsname", "placeholder": "Type name of Parent", type: "input" },
    {"name": "course", "label": "Course", labelSpan: 12, span: 12, "placeholder": "Course Type", "type": "select", "options": types },
    {"name": "type", "label": "Type", labelSpan: 12, span: 12, "placeholder": "Type of Student", "type": "select", "options": types }
    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Add New Member",
        class: "custom-modal-title",
        fields: modalFields,
        buttons: [
            {
                label: "Save",
                span: 4,
                offset: 4,
                onClick: props.onSubmit,
                class: "modal-button"
            }
        ]

    }

    return (
        <CustomModal items={fields} />
    );
}
