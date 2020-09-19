import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import FormControlInput from './FormControlInput';

export default function FormInput({ name, placeholder, value, onChange, className, required,
    span, offset, label, labelSpan, labelOffset, labelStyle, labelClass, disabled, hidden, error }) {
    return (
        <Form.Group as={Row} controlId={"formBasic" + name}>
            {label ?
                <Col md={{ span: labelSpan, offset: labelOffset }}>
                    <Form.Label style={labelStyle} className={labelClass} >{label}</Form.Label>
                </Col>
                : <></>}
                <FormControlInput span={span} offset={offset} name={name} placeholder={placeholder}
                    value={value} onChange={onChange}
                    required={required} disabled={disabled} className={className}
                    hidden={hidden} />
                    {error&&<span>{error}</span>}
        </Form.Group>
    )
}