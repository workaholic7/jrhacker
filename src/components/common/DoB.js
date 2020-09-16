import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
function DoB() {

    const days = [{ id: "", name: "" }];
    const months = [{ id: "", name: "" }];
    const years = [{ id: "", name: "" }];

    for (var i = 1; i <= 31; i++) {
        days.push({ id: i, name: i });
    }

    for (var i = 1; i <= 12; i++) {
        months.push({ id: i, name: i });
    }

    for (var i = 1950; i <= 2002; i++) {
        years.push({ id: i, name: i });
    }


    const dobFields = [
        {
            placeholder: "Date",
            options: days,
        },
        {
            placeholder: "Month",
            options: months,
        },
        {
            placeholder: "Year",
            options: years,
        }
    ]


    return (
        <Form.Group as={Row}>
            <Col md="12">
                <Form.Label className="custom-modal-label">DOB</Form.Label>
            </Col>

            {dobFields.map((element) => {
                return <Col md={{ span: "4" }}>
                    <Form.Control className="form-select custom-modal-select" as="select" key={element.placeholder} /*onChange={onChange}*/>
                        <option value="" selected disabled hidden key={element.placeholder}>{element.placeholder}</option>
                        {element.options.map((data, index) =>
                            <option value={data.id} key={data + index} >
                                {data.name}
                            </option>)}
                    </Form.Control>
                </Col>
            })}
        </Form.Group>

    )

}


export default DoB;