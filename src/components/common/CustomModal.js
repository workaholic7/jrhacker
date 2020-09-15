import React from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import FormInput from './FormInput';
import Styles from './Styles';
import CustomButton from './CustomButton';
import FormSelect from './FormSelect';

function CustomModal({ items, children }) {

    return (
        <Modal show={items.show} onHide={items.close} className="custom-modal" >
            <Modal.Header closeButton>
                <div className={items.class}>
                    {items.label}
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {items.fields.map((element, index) => {
                        let type = element.type;
                        if (type === "select") {
                            return <FormSelect placeholder={element.placeholder} options={element.options} name={element.name} label={element.label} span={element.span} labelSpan={element.labelSpan} labelClass="custom-modal-label" selectClass="custom-modal-select" />;

                        } else if (type === "input") {
                            return <FormInput name={element.name} key={element.name + index} label={element.label} placeholder={element.placeholder} required span="12" labelSpan="12" labelClass="custom-modal-label" inputClass="custom-modal-input" />;

                        } else if (type === "label") {
                            return (<Row>
                                <Col md={element.span} className={element.class}>
                                    {element.label}
                                </Col>
                            </Row>);
                        } else if (type === "dob") {
                            return <FormSelect placeholder={element.placeholder} options={element.options} name={element.name} label={element.label} span={element.span} labelSpan={element.labelSpan} labelClass="custom-modal-label" selectClass="custom-modal-select" />;
                        } else {
                            return <></>;
                        }

                    })}
                    <Row>
                        {items.buttons && items.buttons.map((button, index) => {
                            return <CustomButton buttonText={button.label} onClick={button.onClick} className={button.class} span={button.span} offset={button.offset} />
                        })}
                    </Row>
                </Form>
            </Modal.Body>
            {children}
        </Modal >
    )
}

export default CustomModal;