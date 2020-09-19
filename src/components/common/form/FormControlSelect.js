import React from 'react';
import { Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

FormControlSelect.propTypes = {
    options: PropTypes.array.isRequired
}
export default function FormControlSelect({ options, placeholder, onChange, className,value, span, offset, name}) {

    return (
        <>{ options && 
            <Col md={{ span: span, offset: offset }}>
                <Form.Control name={name} className={"form-select " + className} as="select" key={name} onChange={(e)=>onChange(e)}>
                    <option value={value} key={placeholder}>{placeholder}</option>
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
