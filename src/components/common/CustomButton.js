import React from 'react';
import { Button, Col } from 'react-bootstrap';

function CustomButton({ span, offset, buttonText, variant, textStyle, className, onClick, type }) {
    return (
        <Col md={{ span: span, offset: offset }}>
            <Button variant={variant} type={type} className={className} style={textStyle} onClick={onClick}>
                {buttonText}
            </Button>
        </Col>

    )
}

export default CustomButton;