import React, { useState, useEffect } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import roles from '../../../static/roles.json'
import CustomModal from '../../common/CustomModal';

function AddNewMemberModal(props) {

    
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    

    const handleChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        let error = errors;
        switch(name){
            case 'name':
                error.name = value.length<8?
                    'Name must be at least 8 characters long!'
                    :'';

                break;
            case 'email':
                error.name = value.length<8?
                    'Email must be at least 8 characters long!'
                    :'';

                break;
            case 'mobile':
                error.name = value.length<8?
                    'Mobile Number must be at least 10 characters long!'
                    :'';

                break;
            default:
                break;

        }
        console.log("sda");
        setErrors(error);
        setFormData(formData, formData[name]=value);

    }

    const handleSubmit = () =>{

    }
    const modalFields = [{ name: "name", label: "Name", placeholder: "Type name of user", type: "input" },
    { name: "email", label: "Email", placeholder: "Type email of user", type: "input" },
    { name: "countryCode", label: "Country Code", placeholder: "Enter country code", type: "input" },
    { name: "mobileNumber", label: "Mobile Number", placeholder: "Enter Mobile Number", type: "input" },
    { name: "role", label: "Role", labelSpan: 12, span: 12, placeholder: "Select role of user", type: "select", options: roles },
    { name: "dob", label: "DoB", placeholder: "Type name of user", type: "dob" },
    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Add New Member",
        class: "custom-modal-title",
        fields: modalFields,
        onChange: handleChange,
        onSubmit: handleSubmit,
        formData:formData,
        errors: errors,
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

    useEffect(()=>{
        console.log("fsfsfs")
    },[errors, formData]);

    return (
        <CustomModal items={fields} errors={errors}/>
    );
}

export default AddNewMemberModal;