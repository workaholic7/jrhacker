import React from 'react';
import { Modal, Form, Row, } from 'react-bootstrap';
import FormInput from './FormInput';
import Styles from './Styles';
import CustomButton from './CustomButton';
import FormSelect from './FormSelect';

function CustomModal({ name, show, close, modalFields }) {

    return (
        <Modal show={show} onHide={close} className="custom-modal" >
            <Modal.Header closeButton>
                <div className="custom-modal-title">
                    {name}
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {modalFields.map((element, index) => {

                        return element.type === "select" ?
                            <FormSelect placeholder={element.placeholder} options={element.options} name={element.name} label={element.label} span="12" labelSpan="12" labelClass="custom-modal-label" selectClass="custom-modal-select" /> :
                            <FormInput name={element.name} key={element.name + index} label={element.label} placeholder={element.placeholder} required span="12" labelSpan="12" labelClass="custom-modal-label" inputClass="custom-modal-input" />
                    })}
                    <Row>
                        {/* //onClick={showAddNewMember} */}
                        <CustomButton buttonText="Cancel" onClick={close} className="custom-button" textStyle={Styles.buttonText} span="3" offset="3" />
                        <CustomButton variant="primary" buttonText="Save" className="custom-button modal-submit-button" textStyle={Styles.buttonText} span="3" />
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CustomModal;