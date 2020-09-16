import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

export default function FormControlInput({ name, placeholder, value, onChange, inputClass, required,
    span, offset,disabled, hidden, type }) {
    return (
        
            <Col md={{ span: span || "12", offset: offset || "12" }}>
                <Form.Control type={type || "input"}
                    name={name} placeholder={placeholder}
                    value={value} onChange={(e) => onChange(e)}
                    required={required} disabled={disabled} className={"form-input " + inputClass}
                    style={{ 'display': hidden ? 'none' : 'inline' }} />
            </Col>
    )
}