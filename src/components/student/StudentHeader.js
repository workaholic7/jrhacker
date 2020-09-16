import React from 'react'
import Header from '../common/Header'
import types from '../../static/studentTypes.json'

export default function StudentHeader() {

    const items={
        class: "student-search-section",
        header:[
            {   type:"input",
                placeholder: "Name",
                span: 2,
                class: "header-search-input"
            },
            {   type:"input",
                placeholder: "Email",
                span: 2,
                class: "header-search-input"
            },
            {   type:"input",
                placeholder: "Mobile",
                span: 2,
                class: "header-search-input"
            },
            {   type:"input",
                placeholder: "Parents Name",
                span: 2,
                class: "header-search-input"
            },
            {   type:"dropdown",
                placeholder: "Type",
                span: 2,
                offset: 0,
                options: types,
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
                class: "header-search-input"
            },

        ]
    }

    return (
        <Header items={items}/>
    )
}
