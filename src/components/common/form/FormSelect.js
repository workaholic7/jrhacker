import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormControlSelect from './FormControlSelect';

FormSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired
}
export default function FormSelect(props) {

    return (
        <>
            {props.options &&
                <Form.Group as={Row}>
                    {props.label ?
                        <Col md={{ span: props.labelSpan, offset: props.labelOffset }}>
                            <Form.Label style={props.labelStyle} className={props.labelClass}>{props.label}</Form.Label>
                        </Col>
                        : <> </>}
                    <FormControlSelect {...props} />
                    {props.error && <span className="error-message">{props.error}</span>}
                </Form.Group>
            }
        </>
    )
}
