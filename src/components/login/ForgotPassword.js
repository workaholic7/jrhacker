import React, {useState} from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import LoginHeader from './LoginHeader'
import FormInput from '../common/form/FormInput'

export default function ForgotPassword() {

    const [formData, setFormData] = useState({"email":""});

    const onFieldChange = (e) => {
        let data = Object.assign({}, formData);
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    return (
        <Container fluid >
            <LoginHeader />

            <Container className="form-container forgot-password-container">
                
                <Row>
                    <Col className="form-header" style={{textAlign: 'left'}}>
                        Check Your Email
                    </Col>
                </Row>
                <Form className="form">
                <Row>
                    <Col md="12" className="forgot-password-form-text">
                        Don’t worry, Just enter your email id for verification and then contact portal admin.
                    </Col>
                </Row>
                <Row>
                    <FormInput label="Email" span="12" labelSpan="12" labelClass="signin-form-label" 
                    name="email" value={formData.email} onChange={onFieldChange}
                    inputClass="signin-input" placeholder="Type here your email id" required/>
                </Row>
                
                <Row>
                    <Button type="submit" className="submit-button"> Send Request </Button>
                </Row>
                </Form>
                
            </Container>
        </Container>
    )
}
