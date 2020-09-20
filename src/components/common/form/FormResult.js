import React from 'react';
import {Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

FormResult.propTypes={
    data: PropTypes.exact({
        success: PropTypes.bool,
        message: PropTypes.string
    }),
    message: PropTypes.string,
    span: PropTypes.number,
    offset: PropTypes.number,
}

FormResult.defaultProps={
    span: 12,
    offset: 0,
}
function FormResult({data, span, offset}){
return(
    <Col md={{ span:span, offset:offset}} className={ data.success ? 'success-form-result' : 'error-form-result'}>
          {data.message}
    </Col>
)
}

export default FormResult;