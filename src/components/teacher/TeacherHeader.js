import React from 'react';
import courses from '../../static/courses.json'
import Header from '../common/Header';

export default function TeacherHeader() {
    const items = {
        class: "dashboard-container",
        rowClass: "dashboard-header-row",
        divider: false,
        header: [
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
            },
            {
                type: "select",
                label: "Course",
                placeholder: "Course",
                span: 3,
                offset: 0,
                options: courses,
            },
            {
                type: "button",
                label: "Search",
                span: 2,
                offset: 3,
                class: "custom-button profile-header-button"
            },
            {
                type: "button",
                label: "Add Teacher",
                span: 2,
                offset: 2,
                class: "custom-button profile-header-button"
            }
        ]

    }

    return (
        <Header items={items} />
    )
}
