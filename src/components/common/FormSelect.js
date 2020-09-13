import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

FormSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired
}
export default function FormSelect({ label, options, placeholder, onChange, selectClass, span, offset, labelSpan, labelOffset, labelStyle, labelClass }) {

    return (
        <>
            {options &&
                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                    {label ?
                        <Col md={{ span: labelSpan, offset: labelOffset }}>
                            <Form.Label style={labelStyle} className={labelClass}>{label}</Form.Label>
                        </Col>
                        : <> </>}

                    <Col md={{ span: span, offset: offset }}>
                        <Form.Control className={"form-select " + selectClass} as="select" key={label} onChange={onChange}>
                            <option value="" key={placeholder}>{placeholder}</option>
                            {options.map((data, index) =>
                                <option value={data.id} key={data + index} >
                                    {data.name}
                                </option>)}

                        </Form.Control>
                    </Col>
                </Form.Group>
            }
        </>
    )
}
