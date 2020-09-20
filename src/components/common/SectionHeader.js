import React from 'react'
import Cell from './Cell';
import CustomButton from './CustomButton';
import FormControlSelect from './form/FormControlSelect';
import FormControlInput from './form/FormControlInput';
import '../../css/students.css';

export default function SectionHeader({ prop }) {
    if (prop.type === "label") {
        return <Cell span={prop.span} text={prop.label} className={prop.class} style={{ margin: 'auto' }} />
    } else if (prop.type === "button") {
        return (<CustomButton span={prop.span} offset={prop.offset} buttonText={prop.label} className={prop.class} onClick={prop.onClick} />);
    } else if (prop.type === 'select') {
        return (<FormControlSelect {...prop} />);
    } else if (prop.type === 'input') {
        return (<FormControlInput {...prop} />);
    } else {
        return <React.Fragment key={prop.name}></React.Fragment>;
    }
}
