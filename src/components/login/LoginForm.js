import React, {useState} from 'react'
import { Container,Row, Col, ButtonGroup, Button, Form } from 'react-bootstrap'
import '../../css/login.css'
import FormInput from '../common/FormInput'

export default function LoginForm() {
    const [formData, setFormData] = useState({"email":"", "password": ""});

    const onFieldChange = (e) => {
        let data = Object.assign({}, formData);
        data[e.target.name] = e.target.value;
        setFormData(data);
    }
    return (
        <Col md="5">
        <Container className="form-container">
            <Row>
                <Col className="form-header">
                    Signin
                </Col>
            </Row>
            
            <Form className="form">
                <Row>
                    <ButtonGroup className="signin-button-group">
                        <Button >TEACHER</Button>
                        <Button >ADMIN</Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    <FormInput label="Email" span="12" labelSpan="12" labelClass="signin-form-label" 
                    name="email" value={formData.email} onChange={onFieldChange}
                    inputClass="signin-input" placeholder="Type here your email id" required/>
                </Row>
                <Row>
                    <FormInput label="Password" span="12" type="password" labelSpan="12" labelClass="signin-form-label"
                    name="password" value={formData.password} onChange={onFieldChange}
                     inputClass="signin-input" placeholder="Type password here" required/>
                </Row>
                <Row>
                    <Button type="submit" className="submit-button"> SUBMIT </Button>
                </Row>
                <Row>
                    <Button variant="link" className="forgot-password"><a href="/password/forgot"> Forgot Password? </a></Button>
                </Row>

            </Form>
        </Container>
        </Col>
    )
}

const Styles={
    loginForm:{
        //position: 'absolute',
        width: '367px',
        height: '581px',
        //left: '705px',
        top: '',

        background: '#FFFFFF',
        /* Shadow medium */

        boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.14)',
        borderRadius: '8px',
    }
}