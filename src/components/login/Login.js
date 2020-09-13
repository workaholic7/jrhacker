import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm';
import LoginImage from '../../images/Platform.png';

export default function Login() {
    return (
        <Container fluid>
            <LoginHeader />

            <Container fluid style={{position: 'absolute', top: '120px'}}>
                <Row>
                    <Col md={7} style={{top:'95px'}}>
                        <Row>
                            <Col md={{span:10, offset:2}} className="login-text">
                                An advanced platform for teachers to connect with students better
                                <div>
                                <img src={LoginImage} alt="" style={{width: '100%', marginTop:'20px'}}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <LoginForm />
                </Row>
                
            </Container>
        </Container>
    )
}
