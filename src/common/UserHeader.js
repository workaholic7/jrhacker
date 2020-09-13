import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomButton from './CustomButton';
import Cell from './Cell';
import Styles from './Styles';
import Divider from './Divider';
import { CONSTANTS } from '../Constants';
function UserHeader({ buttonText }) {
    const LINEHEIGHT = '31px';
    return (
        <Container className='dashboard-container'>
            <Row style={{ height: '46px' }}>
                <Cell span="4" text={CONSTANTS.USER_HEADER_TEXT} style={Object.assign({}, Styles.labelLeftAlign, { paddingTop: '6px' })} />
                <Col md={{ span: 2, offset: 6 }}>
                    <CustomButton buttonText={buttonText} classname="custom-button" textStyle={Styles.buttonText} />
                </Col>
            </Row>
            <Divider />
            <Row style={{ lineHeight: LINEHEIGHT }}>
                <Cell span="2" text="Email" style={Object.assign({}, Styles.labelLeftAlign)} />
                <Cell span="2" text="abc@gmnail.com" style={Styles.leftAlign} />
                <Cell span="2" text="User Role" style={Object.assign({}, Styles.labelLeftAlign)} />
                <Cell span="2" text="Super Admin" style={Styles.leftAlign} />
            </Row>

            <Row style={{ lineHeight: LINEHEIGHT }}>
                <Cell span="2" text="Dial Code" style={Object.assign({}, Styles.labelLeftAlign)} />
                <Cell span="2" text="+91" style={Styles.leftAlign} />
            </Row>

            <Row style={{ lineHeight: LINEHEIGHT }}>
                <Cell span="2" text="Mobile" style={Object.assign({}, Styles.labelLeftAlign)} />
                <Cell span="2" text="8375083217" style={Styles.leftAlign} />
            </Row>
        </Container >

    )
}

export default UserHeader;