import React, {useState} from 'react'
import Header from '../common/Header'
import types from '../../static/studentTypes.json'
import AddNewStudentModal from './modal/AddNewStudentModal';

export default function StudentHeader() {
    const [showAddNewStudent, setShowAddNewStudent] = useState(false);
    const closeAddNewStudentModal = () => setShowAddNewStudent(false);
    const showAddNewStudentModal = () => setShowAddNewStudent(true);

    const items={
        class: "student-search-section",
        header:[
            {   type:"input",
                placeholder: "Name",
                span: 2,
                className: "header-search-input"
            },
            {   type:"input",
                placeholder: "Email",
                span: 2,
                className: "header-search-input"
            },
            {   type:"input",
                placeholder: "Mobile",
                span: 2,
                className: "header-search-input"
            },
            {   type:"input",
                placeholder: "Parents Name",
                span: 2,
                className: "header-search-input"
            },
            {   type:"select",
                placeholder: "Type",
                span: 2,
                offset: 0,
                options: types,
                className: "header-select"
            },
            {   type:"button",
                label:"Search Student",
                span: 2,
                offset: 0,
                class:"custom-button profile-header-button"
            },
            {   type:"input",
                placeholder:"Course",
                span: 2,
                className: "header-search-input"
            },
            {   type:"button",
            label:"Add New Student",
            span: 2,
            offset: 10,
            class:"custom-button profile-header-button",
            onClick: showAddNewStudentModal
            },

        ]
    }

    return (
        <>
        <Header items={items}/>
        <AddNewStudentModal show={showAddNewStudent} close={closeAddNewStudentModal} />
        </>
    )
}
