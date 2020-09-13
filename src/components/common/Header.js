import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Cell from './Cell'
import Divider from './Divider';
import SectionHeader from './SectionHeader';
function Header({ items }) {
    return (
        <Container  fluid className={items.class}>
        {Object.keys(items).map((key) =>{
            var data = items[key];
            if(key==="header"){
                return (
                <>    
                <Row className={items.rowClass}>
                
                {Object.keys(data).map((type) => {
                    return <SectionHeader type={type} prop={data[type]} />
                })}
                </Row>
                <Divider />
                </>);
            } else if(key==="rows"){
                return (Array.isArray(data)?
                data.map((rows) => {
                    return (
                        <Row className="profile-row">
                        {rows.row.map((col)=>{
                            return <Cell span={col.span} text={col.text} className={col.class} />
                        })}
                        </Row>
                    )
                })
                :<></>)
            }
            else{
                return null;
            }
        })}
            
        </Container >

    )
}

export default Header;