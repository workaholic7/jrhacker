import React, { useEffect } from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import FormInput from './form/FormInput';
import CustomButton from './CustomButton';
import FormSelect from './form/FormSelect';
import DoB from './DoB';
import FormResult from './form/FormResult';

function CustomModal({ items }) {

    useEffect(()=>{

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
            {items.formResult?<FormResult data={items.formResult} />:<></>}
            <Modal.Body>
                <Form onSubmit={(e) => items.onSubmit(e)}>
                    {items.fields.map((element, index) => {
                        let type = element.type;
                        if (type === "select") {
                            return <FormSelect key={element+'-'+index} {...element} onChange={items.onChange}  value={formData && formData[element.name]}
                            // placeholder={element.placeholder} options={element.options} name={element.name} 
                            // value={formData && formData[element.name]}
                            // label={element.label} span={element.span} labelSpan={element.labelSpan} 
                            //     labelClass="custom-modal-label" className="custom-modal-select" 
                            // onChange={items.onChange} 
                            error={errors && errors[element.name]} labelClass="custom-modal-label" className="custom-modal-select" />;
                        } else if (type === "input") {
                            return <FormInput  key={element.name + index} {...element} onChange={items.onChange} labelClass="custom-modal-label" 
                            className="custom-modal-input"
                            // label={element.label} name={element.name}
                            // placeholder={element.placeholder} required span="12" labelSpan="12" labelClass="custom-modal-label" 
                            // className="custom-modal-input" onChange={items.onChange} 
                            value={formData&& formData[element.name]}  error={errors && errors[element.name]} />;
                        } else if (type === "label") {
                            return (<Row key={element + '-' + index} >
                                <Col md={element.span} className={element.class}>
                                    {element.label}
                                </Col>
                            </Row>);
                        } else if (type === "dob") {
                            return (<><DoB value={formData&& formData[element.name]} key={element+'-'+index} onChange={element.onChange}/> 
                            {errors[element.name] && errors[element.name].length>0 && errors[element.name].map((error) => {
                               return  <div className="dob-error-message">{error}</div>
                            })}
                            {/* <span className="error-message">{errors[element.name]}</span> */}
                            </>
                            );
                        } else {
                            return <></>;
                        }
                    })}
                    <Row style={{ "marginTop": "20px" }}>
                        {items.buttons && items.buttons.map((button, index) => {
                            return <CustomButton key={button+'-'+index} {...button}
                            // type={button.type} label={button.label} onClick={button.onClick} className={button.class} span={button.span} offset={button.offset} 
                            />
                        })}
                    </Row>
                </Form>
            </Modal.Body>
        </Modal >
    )
}

export default CustomModal;