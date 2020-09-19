import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import TableView from '../common/TableView';
import Divider from '../common/Divider';
import SectionHeader from './SectionHeader';

export default function ListView({ items }) {
    return (
        <Container fluid className='dashboard-container dashboard-list'>
            {Object.keys(items).map((key, index) => {
                var data = items[key];
                if (key === "header") {
                    return (
                        <Row key={key + '-' + index} style={{ height: '46px' }}>

                            {Object.keys(data).map((type, index) => {
                                return <SectionHeader key={type + '-' + index} type={type} prop={data[type]} />
                            })}
                        </Row>
                    );
                } else if (key === "table") {
                    return <TableView key={key + '-' + index} header={data.header} body={data.list} action={data.action} actionClass={data.actionClass} linkName="Action" />
                } else if (key === "divider") {
                    return <Divider />
                } else {
                    return <></>;
                }
            })}
        </Container>
    )
}
