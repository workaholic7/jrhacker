import React from 'react';
import { Pagination, Col, Row } from 'react-bootstrap';

function Paging(props) {
    var items = [];
    items.push(<Pagination.First key="First" onClick={() => { props.onPageClick(1) }} />);
    items.push(<Pagination.Item key="Prev" onClick={() => { props.onPageClick(props.currentPage - 1) }} disabled={props.currentPage === 1}>Previous</Pagination.Item>);

    for (let index = 1; index <= props.pages; index++) {
        items.push(<Pagination.Item key={index} onClick={() => { props.onPageClick(index) }} active={props.currentPage === index}>{index}</Pagination.Item>);
    }
    items.push(<Pagination.Item key="Next" onClick={() => { props.onPageClick(props.currentPage + 1) }} disabled={props.currentPage === props.pages}>Next</Pagination.Item>);
    items.push(<Pagination.Last key="Last" onClick={() => { props.onPageClick(props.pages) }} />);
    return (

        props.pages > 1 ?
            <Row>
                <Col md={12}>
                    <Pagination className="justify-content-center">
                        {items}
                    </Pagination>
                </Col>
            </Row> : <> </>

    )
}

export default Paging;