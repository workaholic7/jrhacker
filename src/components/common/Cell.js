import React from 'react';
import { Col } from 'react-bootstrap';

function Cell({ span, offset, text, style, lineHeight, className }) {
    return (
        <Col md={{ span: span, offset: offset }} style={Object.assign({},style,{lineHeight:lineHeight})} className={className}>
            {text}
        </Col>
    )
}

export default Cell;