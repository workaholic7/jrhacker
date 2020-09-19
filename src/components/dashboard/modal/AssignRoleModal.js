import React from 'react'
import roles from '../../../static/roles.json'
import CustomModal from '../../common/CustomModal';

function AssignRoleModal(props) {

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
        onChange: props.onChange,
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
                onClick: props.showConfirmationModal
            }
        ]

    }

    return (
        <CustomModal items={fields} />
    );
}

export default AssignRoleModal;