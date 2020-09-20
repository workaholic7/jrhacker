import React from 'react';
import { Button, Col } from 'react-bootstrap';

function CustomButton({ span, offset, label, variant, textStyle, className, onClick, type }) {
    return (
        <Col md={{ span: span, offset: offset }}>
            <Button variant={variant} type={type} className={className} style={textStyle} onClick={onClick}>
                {label}
            </Button>
        </Col>

    )
}

export default CustomButton;