import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Divider from '../common/Divider';
import TableView from '../common/TableView';
import Paging from './Paging';
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
                    return <Divider key={`$key-$index`}/>
                } else if (key === "paging") {
                    return <Paging key={key+"-"+index} pages={data.totalPages} onPageClick={data.handlePagination} currentPage={data.activePage} />
                } else {
                    return <></>;
                }
            })}
        </Container>
    )
}
