import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Cell from './Cell'
import Divider from './Divider';
import SectionHeader from './SectionHeader';
function Header({ items }) {
    return (
        <Container fluid key={items.class} className={items.class}>
            {Object.keys(items).map((key, index) => {
                var data = items[key];
                if (key === "header") {
                    return (
                        data.map((row) => {
                            return (
                                <>
                                    <Row className={items.rowClass}>

                                        {Object.keys(row).map((type) => {
                                            return <SectionHeader type={type} prop={row[type]} />
                                        })}
                                    </Row>
                                </>);
                        })
                    );


                } else if (key === 'divider') {
                    { return items.divider ? <Divider /> : <> </> }

                } else if (key === "rows") {
                    return (Array.isArray(data) ?
                        data.map((rows) => {
                            return (
                                <Row className="profile-row">
                                    {rows.row.map((col, index) => {
                                        return <Cell key={col + '-' + index} span={col.span} text={col.text} className={col.class} />
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