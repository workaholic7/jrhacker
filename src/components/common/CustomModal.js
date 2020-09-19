import React,{useEffect} from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import FormInput from './form/FormInput';
import CustomButton from './CustomButton';
import FormSelect from './form/FormSelect';
import DoB from './DoB';

function CustomModal({ items, children }) {

    useEffect(()=>{
        console.log("Use")
    },[items]);
    const errors = items.errors;
    const formData = items.formData;
    return (
        <Modal show={items.show} onHide={items.close} className="custom-modal" >
            <Modal.Header closeButton>
                <div className={items.class}>
                    {items.label}
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={items.onSubmit}>
                    {items.fields.map((element, index) => {
                        let type = element.type;
                        if (type === "select") {
                            return <FormSelect key={element+'-'+index} placeholder={element.placeholder} options={element.options} 
                                name={element.name} value={formData&& formData[element.name]}label={element.label} span={element.span} labelSpan={element.labelSpan} 
                                labelClass="custom-modal-label" className="custom-modal-select" onChange={(e)=>items.onChange(e)} error={errors && errors[element.name]} />;

                        } else if (type === "input") {
                            return <FormInput name={element.name} key={element.name + index} label={element.label} 
                            placeholder={element.placeholder} value={formData&& formData[element.name]} required span="12" labelSpan="12" labelClass="custom-modal-label" 
                            className="custom-modal-input" onChange={(e)=>items.onChange(e)} error={errors && errors[element.name]} />;

                        } else if (type === "label") {
                            return (<Row key={element+'-'+index} >
                                <Col md={element.span} className={element.class}>
                                    {element.label}
                                </Col>
                            </Row>);
                        } else if (type === "dob") {
                            return <DoB  key={element+'-'+index} onChange={(e)=>items.onChange(e)} error={errors && errors[element.name]} />;
                        } else {
                            return <></>;
                        }

                    })}
                    <Row style={{ "marginTop": "20px" }}>
                        {items.buttons && items.buttons.map((button, index) => {
                            return <CustomButton key={button+'-'+index} buttonText={button.label} onClick={button.onClick} className={button.class} span={button.span} offset={button.offset} />
                        })}
                    </Row>
                </Form>
            </Modal.Body>
            {children}
        </Modal >
    )
}

export default CustomModal;