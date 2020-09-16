import React from 'react'
import Cell from './Cell';
import { Col } from 'react-bootstrap';
import CustomButton from './CustomButton';
import FormControlSelect from './form/FormControlSelect';
import FormControlInput from './form/FormControlInput';
import '../../css/students.css';

export default function SectionHeader({prop}) {
    
        if(prop.type==="label"){
            return <Cell span={prop.span} text={prop.label} className={prop.class} />
        } else if (prop.type==="button"){
            return (<Col md={{ span: prop.span, offset: prop.offset }}>
                        <CustomButton buttonText={prop.label} className={prop.class} onClick={prop.onClick} />
                    </Col>);
        } else if (prop.type==='dropdown'){
            return (<FormControlSelect span={prop.span} offset={prop.offset} placeholder={prop.placeholder} options={prop.options} onChange={prop.onChange} />);
        } else if (prop.type==='input'){
            return (<FormControlInput span={prop.span} offset={prop.offset} placeholder={prop.placeholder} onChange={prop.onChange} />);
        } else {
            return null;
        }
    
}
