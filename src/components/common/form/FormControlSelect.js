import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

FormControlSelect.propTypes = {
    options: PropTypes.array.isRequired
}
export default function FormControlSelect({ options, placeholder, onChange, selectClass, span, offset, name}) {

    return (
        <>{ options && 
            <Col md={{ span: span, offset: offset }}>
                <Form.Control className={"form-select " + selectClass} as="select" key={name} onChange={onChange}>
                    <option value="" key={placeholder}>{placeholder}</option>
                    {options.map((data, index) =>
                        <option value={data.id} key={data + index} >
                            {data.name}
                        </option>)}
                </Form.Control>
            </Col>
            }
        </>
    )
}
