import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function FormControlInput({ name, placeholder, value, onChange, className, required,
    span, offset, disabled, hidden, type }) {
    return (

        <Col md={{ span: span || "12", offset: offset || "12" }}>
            <Form.Control type={type || "input"}
                name={name} placeholder={placeholder}
                value={value} onChange={(e) => onChange(e)}
                required={required} disabled={disabled} className={"form-input " + className}
                style={{ 'display': hidden ? 'none' : 'inline' }} />
        </Col>
    )
}