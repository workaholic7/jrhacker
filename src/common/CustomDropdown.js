import React from 'react';
import { Dropdown } from 'react-bootstrap';

function CustomDropdown({ text, options }) {
    return (
        <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" className='custom-dropdown'>
                {text}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map(element => {
                    return <Dropdown.Item value={element} >{element}</Dropdown.Item>
                })
                }
            </Dropdown.Menu>
        </Dropdown>

    )
}

export default CustomDropdown;






