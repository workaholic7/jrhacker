import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import TableView from '../common/TableView';
import Divider from '../common/Divider';
import SectionHeader from './SectionHeader';

export default function ListView({ items }) {
    return (
        <div>
            <Container fluid className='dashboard-container dashboard-list'>
                {Object.keys(items).map((key) => {
                    var data = items[key];
                    if (key === "header") {
                        return (
                            <>
                                <Row style={{ height: '46px' }}>

                                    {Object.keys(data).map((type) => {
                                        return <SectionHeader type={type} prop={data[type]} />
                                    })}
                                </Row>
                                <Divider />
                            </>);
                    } else if (key === "table") {
                        return <TableView header={data.header} body={data.list} action={data.action} actionClass={data.actionClass} />
                    } else {
                        return null;
                    }
                })}
            </Container>
        </div>
    )
}
