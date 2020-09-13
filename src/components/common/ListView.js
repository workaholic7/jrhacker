import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomButton from '../common/CustomButton';
import Cell from '../common/Cell';
import Styles from '../common/Styles';
import FormSelect from '../common/FormSelect';
import TableView from '../common/TableView';
import Divider from '../common/Divider';
import CustomModal from '../common/CustomModal';
import roles from '../../static/roles.json'
import SectionHeader from './SectionHeader';

export default function ListView({items}) {
    return (
        <div>
            <Container fluid className='dashboard-container dashboard-list'>
            {Object.keys(items).map((key)=>{
                var data = items[key];
                if(key==="header"){
                    return (
                    <>    
                    <Row style={{ height: '46px' }}>
                    
                    {Object.keys(data).map((type) => {
                        return <SectionHeader type={type} prop={data[type]} />
                    })}
                    </Row>
                    <Divider />
                    </>);
                } else if(key==="table"){
                    return <TableView header={data.header} body={data.list} action={data.action} actionClass={data.actionClass} />
                } else{
                    return null;
                }
            })}
                {/* <Row >
                    <Cell span="2" text="List of Users" style={Styles.labelLeftAlign} />
                    <FormSelect placeholder="Role" options={roles} />
                    <Col md={{ span: 2, offset: 6 }}>
                        <CustomButton buttonText={buttonText} onClick={showAddNewMemberModal} classname="custom-button" textStyle={Styles.buttonText} /> 
                    </Col>
                </Row>
                <Divider /> */}

                {/* <TableView header={tableHeader} body={users} action={handleActionClick} /> */}
            </Container>
        </div>
    )
}
