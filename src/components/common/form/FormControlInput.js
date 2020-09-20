import React from 'react';
import { Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


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
FormControlInput.propTypes = {
  className: PropTypes.any,
  disabled: PropTypes.any,
  hidden: PropTypes.any,
  name: PropTypes.any,
  offset: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.any,
  required: PropTypes.any,
  span: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
}
