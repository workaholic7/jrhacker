import React from 'react';
import { Col } from 'react-bootstrap';

function Cell({ span, offset, text, style, lineHeight }) {
    return (
        <Col md={{ span: span, offset: offset }} style={Object.assign({},style,{lineHeight:lineHeight})}>
            {text}
        </Col>
    )
}

export default Cell;