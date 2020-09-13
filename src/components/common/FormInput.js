import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

export default function FormInput({ name, placeholder, value, onChange, inputClass, required,
    span, offset, label, labelSpan, labelOffset, labelStyle, labelClass, disabled, hidden, type }) {
    return (
        <Form.Group as={Row} controlId={"formBasic" + name}>
            {label ?
                <Col md={{ span: labelSpan, offset: labelOffset }}>
                    <Form.Label style={labelStyle} className={labelClass} >{label}</Form.Label>
                </Col>
                : <></>}
            <Col md={{ span: span || "12", offset: offset || "12" }}>
                <Form.Control type={type || "input"}
                    name={name} placeholder={placeholder}
                    value={value} onChange={(e) => onChange(e)}
                    required={required} disabled={disabled} className={"form-input " + inputClass}
                    style={{ 'display': hidden ? 'none' : 'inline' }} />
            </Col>
        </Form.Group>
    )
}