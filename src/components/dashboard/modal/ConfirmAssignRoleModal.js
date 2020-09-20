import React,{useEffect} from 'react';
import CustomModal from '../../common/CustomModal';

function ConfirmAssignRoleModal(props) {

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
        formResult: props.formResult,
        buttons: [
            {
                label: "No",
                span: 6,
                offset: 0,
                onClick: props.close,
                className: "modal-button"
            },
            {
                label: "Yes, Change role",
                type: "submit",
                span: 6,
                className: "modal-button modal-submit-button"
            }
        ]

    }

    useEffect(() => {
        
    }, [props])

    return (
        <CustomModal items={fields} />
    );
}

export default ConfirmAssignRoleModal;