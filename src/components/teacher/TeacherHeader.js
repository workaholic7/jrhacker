import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomButton from '../../common/CustomButton';
import Cell from '../../common/Cell';
import Styles from '../../common/Styles';
import Divider from '../../common/Divider';
import { CONSTANTS } from '../../Constants';
function TeacherHeader({ buttonText }) {
    const LINEHEIGHT = '31px';
    return (
        <Container className='dashboard-container'>

            <Row style={{ lineHeight: LINEHEIGHT }}>
                <FormInput name="name" key="name" placeholder="Name" required
                    span="2" offset="1" labelClass="custom-modal-label" inputClass="custom-modal-input" />

                {/* <FormInput name={element.name} key={element.name + index} label={element.label} placeholder={element.placeholder} required
                    span="12" labelSpan="12" labelClass="custom-modal-label" inputClass="custom-modal-input" /> */}

            </Row>

            <Row style={{ lineHeight: LINEHEIGHT }}>
                <Cell span="2" text="Dial Code" style={Object.assign({}, Styles.labelLeftAlign)} />
                <Cell span="2" text="+91" style={Styles.leftAlign} />
            </Row>
        </Container >

    )
}

export default TeacherHeader;