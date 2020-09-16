import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormControlSelect from './FormControlSelect';

FormSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired
}
export default function FormSelect({ label, options, placeholder, onChange, selectClass, span, offset, labelSpan, labelOffset, labelStyle, labelClass }) {

    return (
        <>
            {options &&
                <Form.Group as={Row}>
                    {label ?
                        <Col md={{ span: labelSpan, offset: labelOffset }}>
                            <Form.Label style={labelStyle} className={labelClass}>{label}</Form.Label>
                        </Col>
                        : <> </>}
                    <FormControlSelect />
                </Form.Group>
            }
        </>
    )
}
