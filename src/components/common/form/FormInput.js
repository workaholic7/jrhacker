import React, { useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import FormControlInput from './FormControlInput';

export default function FormInput({ name, placeholder, value, onChange, className, dataType,
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
                disabled={disabled} className={className}
                hidden={hidden} type={dataType} />
            {error && <span className="error-message">{error}</span>}
        </Form.Group>
    )
}