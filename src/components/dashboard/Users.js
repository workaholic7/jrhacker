import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomButton from '../common/CustomButton';
import Cell from '../common/Cell';
import Styles from '../common/Styles';
import FormSelect from '../common/FormSelect';
import TableView from '../common/TableView';
import Divider from '../common/Divider';
import CustomModal from '../common/CustomModal';

function Users({ buttonText }) {
    const [showAddNewMember, setShowAddNewMember] = useState(false);
    const [showAssignRole, setShowAssignRole] = useState(false);
    const closeAddNewMemberModal = () => setShowAddNewMember(false);
    const showAddNewMemberModal = () => setShowAddNewMember(true);
    const closeAssignRoleModal = () => setShowAssignRole(false);
    const showAssignRoleModal = () => setShowAssignRole(true);

    const handleActionClick = (id) => {
        showAssignRoleModal();
    }


    const options = [{ "id": "1", "name": "Super Admin" },
    { "id": "2", "name": "Admin" },
    { "id": "3", "name": "Agent" }
    ];

    const tableHeader = ["Name", "Phone", "Email", "DoB", "Dial Code", "Role"];

    const users = [{ "id": 1, "name": "Parul", "phone": "8375083217", "email": "paruldhoundiyal07@gmail.com", "DoB": "16/07/1991", "DialCode": "+91", "Role": "Admin" },
    { "id": 2, "name": "Anshul", "phone": "9027687148", "email": "anshulagarwal03@gmail.com", "DoB": "03/08/1991", "DialCode": "+91", "Role": "Admin" }];

    const modalFields = [{ "name": "Name", "label": "Name", "placeholder": "Type name of user" },
    { "name": "email", "label": "Email", "placeholder": "Type email of user" },
    { "name": "countryCode", "label": "Country Code", "placeholder": "Enter country code" },
    { "name": "mobileNumber", "label": "Mobile Number", "placeholder": "Enter Mobile Number" },
    { "name": "role", "label": "Role", "placeholder": "Select role of user", "type": "select", "options": options },
    { "name": "dob", "label": "DoB", "placeholder": "Type name of user" },
    ];

    const assignRoleFields = [{ "name": "role", "label": "Role", "placeholder": "", "type": "select", "options": options }
    ];
    return (
        <>
            <Container fluid className='dashboard-container dashboard-list'>
                <Row >
                    <Cell span="2" text="List of Users" style={Styles.labelLeftAlign} />
                    <FormSelect placeholder="Role" options={options} />
                    {/* <Cell span="2" text="User Role" style={Object.assign({}, Styles.leftAlign, Styles.bold)} /> */}
                    <Col md={{ span: 2, offset: 6 }}>
                        <CustomButton buttonText={buttonText} onClick={showAddNewMemberModal} classname="custom-button" textStyle={Styles.buttonText} />
                    </Col>
                </Row>
                <Divider />

                <TableView header={tableHeader} body={users} action={handleActionClick} />
            </Container>
            <CustomModal name="Add New Member" show={showAddNewMember} close={closeAddNewMemberModal} modalFields={modalFields} />
            <CustomModal name="Assign Role" show={showAssignRole} close={closeAssignRoleModal} modalFields={assignRoleFields} />
        </>

    )
}

export default Users;