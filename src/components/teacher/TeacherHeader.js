import React, { useState } from 'react';
import courses from '../../static/courses.json'
import Header from '../common/Header';
import AddNewTeacherModal from './modal/AddNewTeacherModal';

export default function TeacherHeader() {

    const [showAddNewTeacher, setShowAddNewTeacher] = useState(false);
    const showAddNewTeacherModal = () => setShowAddNewTeacher(true);
    const closeAddNewTeacherModal = () => setShowAddNewTeacher(false);

    const items = {
        class: "dashboard-container",
        rowClass: "dashboard-header-row",
        divider: false,
        header: [
            [
                {
                    type: "input",
                    placeholder: "Name",
                    span: 2,
                    class: "profile-header-title"
                },
                {
                    type: "input",
                    placeholder: "Email",
                    span: 2,
                    class: "profile-header-title"
                },
                {
                    type: "input",
                    placeholder: "Mobile",
                    span: 2,
                    class: "profile-header-title"
                }
            ],
            [
                {
                    type: "select",
                    label: "Course",
                    placeholder: "Course",
                    span: 2,
                    offset: 0,
                    options: courses,
                },
                {
                    type: "button",
                    label: "Search",
                    span: 2,
                    offset: 4,
                    className: "custom-button profile-header-button"
                },
                {
                    type: "button",
                    label: "Add Teacher",
                    span: 2,
                    offset: 2,
                    onClick: showAddNewTeacherModal,
                    className: "custom-button profile-header-button teacher-profile-header-button"
                }
            ]
        ]
    }

    return (
        <>
            <Header items={items} />
            <AddNewTeacherModal show={showAddNewTeacher} close={closeAddNewTeacherModal} />
        </>
    )
}
