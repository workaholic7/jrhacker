import React, { useState } from 'react';
import TeachersList from './TeacherList';
import AddNewTeacherModal from './modal/AddNewTeacherModal';

function Teachers() {
    const handleDetailClick = () => {
        console.log("Detail button clicked")
    }
    return (
        <>
            <TeachersList handleDetailClick={handleDetailClick} />

        </>

    )
}

export default Teachers;