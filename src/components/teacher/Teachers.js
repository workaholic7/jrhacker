import React from 'react';
import TeachersList from './TeacherList';

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