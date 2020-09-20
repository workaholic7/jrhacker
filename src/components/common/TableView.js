import React from 'react';
import { Table } from 'react-bootstrap';
import Styles from './Styles';
import CustomButton from './CustomButton';

function TableView(props) {
    return (
            <Table hover size="md" responsive >
                <thead>
                    <tr >
                        {props.header.map((element, index) =>
                            <th key={index} style={Styles.labelLeftAlign} > {element}</th>
                        )}
                        {props.action ? <th></th> : <React.Fragment key={'action'}></React.Fragment>}
                    </tr>
                </thead>
                <tbody>
                    {props.body && props.body.map((element, index) =>
                        <tr key={index} style={Object.assign({}, Styles.leftAlign)}>
                            {Object.keys(element).map((key, index) =>
                                key !== 'id' ? <td style={{ fontSize: "14px" }} key={key + '_' + index}>
                                    {element[key]}
                                </td> : <React.Fragment key={'id' + index}></React.Fragment>
                            )}
                            {props.action ? <td><CustomButton variant="link" buttonText={props.linkName} onClick={() => props.action(element.id)} className={props.actionClass} /></td>
                                : <React.Fragment key={'download' + index}></React.Fragment>}
                        </tr>
                    )}
                </tbody>
            </Table>
    )
}

export default TableView;

