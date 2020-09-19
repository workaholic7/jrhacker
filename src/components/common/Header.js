import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Cell from './Cell'
import Divider from './Divider';
import SectionHeader from './SectionHeader';
function Header({ items }) {
    return (
        <Container fluid  key={items.class} className={items.class}>
            {Object.keys(items).map((key, index) => {
                var data = items[key];
                if (key === "header") {
                    return (
                            <Row key={key+'-'+index} className={items.rowClass}>

                                {Object.keys(data).map((type, index) => {
                                    return <SectionHeader key={type+'-'+index} type={type} prop={data[type]} />
                                })}
                            </Row>);
                } else if (key === "rows") {
                    return (Array.isArray(data) ?
                        data.map((rows) => {
                            return (
                                <Row className="profile-row">
                                    {rows.row.map((col, index) => {
                                        return <Cell key={col+'-'+index} span={col.span} text={col.text} className={col.class} />
                                    })}
                                </Row>
                            )
                        })
                        : <React.Fragment key={data}></React.Fragment>)
                }
                else {
                    return null;
                }
            })}

        </Container >

    )
}

export default Header;