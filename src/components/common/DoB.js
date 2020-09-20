import React, {useState} from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import moment from "moment";
function DoB(props) {
    const [date, setDate] = useState({day:'', month:'', year:''});

    const days = [{ id: "", name: "" }];
    const months = [{ id: "", name: "" }];
    const years = [{ id: "", name: "" }];
    for (var i = 1; i <= 31; i++) {
        days.push({ id: i, name: i });
    }
    for (i = 1; i <= 12; i++) {
        months.push({ id: i, name: i });
    }
    let year = moment().year();
    for (i = year-75; i <= year; i++) {
        years.push({ id: i, name: i });
    }

    const dobFields = [
        {
            name: "day",
            placeholder: "Day",
            options: days,
        },
        {
            name: "month",
            placeholder: "Month",
            options: months,
        },
        {
            name: "year",
            placeholder: "Year",
            options: years,
        }
    ]

    const handleDobChange = (e)=>{
        setDate(date, date[e.target.name]=e.target.value);
        props.onChange(date);
        //props.onChange("dob", e.target.name, e.target.value);
    }


    return (
        <Form.Group as={Row}>
            <Col md="12">
                <Form.Label className="custom-modal-label">DOB</Form.Label>
            </Col>
            {dobFields.map((element) => {
                return <Col md={{ span: "4" }}>
                    <Form.Control name={element.name} className="form-select custom-modal-select" as="select" key={element.placeholder} onChange={(e)=>handleDobChange(e)}>
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