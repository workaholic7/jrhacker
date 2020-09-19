import React from 'react';
import CustomModal from '../../common/CustomModal';

function ConfirmAssignRoleModal(props) {

    const assignRoleFields = [

    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Confirmation",
        class: "custom-modal-title",
        onSubmit: props.onSubmit,
        fields: [{
            type: "label",
            label: "Are you sure you want to change the role of the member",
            span: "12",
            class: "custom-modal-label"
        }],
        buttons: [
            {
                label: "No",
                span: 6,
                offset: 0,
                onClick: props.close,
                class: "modal-button"
            },
            {
                label: "Yes, Change role",
                type: "submit",
                span: 6,
                class: "modal-button modal-submit-button"
            }
        ]

    }

    return (
        <CustomModal items={fields} />
    );
}

export default ConfirmAssignRoleModal;