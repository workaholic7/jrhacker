import React from 'react'
import Cell from './Cell';
import { Col } from 'react-bootstrap';
import CustomButton from './CustomButton';
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import '../../css/students.css';

export default function SectionHeader({prop}) {
    
        if(prop.type==="label"){
            return <Cell span={prop.span} text={prop.label} className={prop.class} />
        } else if (prop.type==="button"){
            return (<Col md={{ span: prop.span, offset: prop.offset }}>
                        <CustomButton buttonText={prop.label} className={prop.class} onClick={prop.onClick} />
                    </Col>);
        } else if (prop.type==='dropdown'){
            return (<Col md={{ span: prop.span, offset: prop.offset }}>
                        <FormSelect placeholder={prop.placeholder} options={prop.options} onChange={prop.onChange} />
                    </Col>);
        } else if (prop.type==='input'){
            return (<Col md={{ span: prop.span, offset: prop.offset }}>
                        <FormInput placeholder={prop.placeholder} onChange={prop.onChange} />
                    </Col>);
        } else {
            return null;
        }
    
}
