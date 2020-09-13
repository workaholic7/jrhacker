import React from 'react';
import PropTypes from 'prop-types';



export default function TextButton({children, onClickFunction ,variant, icon, style}) {
    return (
        <div>
            <button onClick={()=>onClickFunction()} style={style}> {children} </button>
        </div>
    )
}
TextButton.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.element,
    onClick: PropTypes.func,
    variant: PropTypes.string
};

TextButton.defaultProps = {
    variant : 'primary'
}