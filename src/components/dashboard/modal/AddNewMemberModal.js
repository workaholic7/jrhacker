import React, { useState, useEffect } from 'react'
import roles from '../../../static/roles.json'
import CustomModal from '../../common/CustomModal';
import { REST_API, BASE_URL } from '../../../Constants';
import validate from '../../Util';

function AddNewMemberModal(props) {

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [success, isSuccess] = useState(true);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        let error = JSON.parse(JSON.stringify(errors));
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                error.name = value.length < 8 ?
                    'Name must be at least 8 characters long!'
                    : '';
                break;
            case 'email':
                error.email = /\S+@\S+\.\S+/.test(value) ?
                    ''
                    : 'Email must follow a valid email syntax like something@something.something!';
                break;
            case 'mobile':
                error.mobile = value.length < 10 ?
                    'Mobile Number must be at least 10 digit long!'
                    : '';
                break;
            default:
                break;

        }
        setErrors(error);
        setFormData(formData, formData[name] = value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formData));
        let API = REST_API.CREATE_USER;
        var url = BASE_URL + API.url;
        fetch(url, {
            method: API.method, headers: {
                'Content-Type': 'application/json',
                body: JSON.stringify(formData)
            }
        })
            .then(
                res => { return res.json() })
            .then(
                (res) => {
                    console.log(res);
                    if (res.status) {
                        isSuccess(true);
                        props.close();
                    } else {
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
    const modalFields = [{ name: "name", label: "Name", placeholder: "Type name of user", type: "input" },
    { name: "email", label: "Email", placeholder: "Type email of user", type: "input" },
    { name: "countryCode", label: "Country Code", placeholder: "Enter country code", type: "input" },
    { name: "mobile", label: "Mobile Number", placeholder: "Enter Mobile Number", type: "input", dataType: "number" },
    { name: "role", label: "Role", labelSpan: 12, span: 12, placeholder: "Select role of user", type: "select", options: roles },
    { name: "dob", label: "DoB", placeholder: "Type name of user", type: "dob" }
    ];
    const fields = {
        show: props.show,
        close: props.close,
        label: "Add New Member",
        class: "custom-modal-title",
        fields: modalFields,
        onChange: handleChange,
        onSubmit: handleSubmit,
        formData: formData,
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
                type: "submit",
                span: 3,
                class: "modal-button modal-submit-button"
            }
        ]
    };

    return (
        <CustomModal items={fields} />
    );
}

export default AddNewMemberModal;