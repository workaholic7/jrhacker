import React from 'react'
import {Row, Col} from 'react-bootstrap'
import JuniorHacker from '../../images/JuniorHacker.jpg';

export default function LoginHeader() {
    return (
        <Row>
            <Col span={12} style={Styles.header}>
                <img src={JuniorHacker} alt="Jr Hacker" style={Styles.image}/>
            </Col>
        </Row>
    )
}

const Styles={
    header:{
        position: 'absolute',
        // width: '1155px;
height: '66px',
left: '0px',
top: '0px',

background: '#FFFFFF',
boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
    },
    image:{
        position: 'absolute',
width: '133px',
height: '39.83px',
left: '24px',
top: '13px',
    }
}
