import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomButton from '../common/CustomButton';
import Cell from '../common/Cell'
import Styles from '../common/Styles';
import Divider from '../common/Divider';
function UserHeader({ buttonText, items }) {
    const LINEHEIGHT = '31px';
    return (
        <Container  fluid className='dashboard-container'>
        {Object.keys(items).map((key) =>{
            var data = items[key];
            if(key==="header"){
                return (
                <>    
                <Row style={{ height: '46px' }}>
                
                {Object.keys(data).map((type) => {
                    var prop = data[type];
                    if(type==="label"){
                        return <Cell span={prop.span} text={prop.label} style={Object.assign({}, Styles.labelLeftAlign, { paddingTop: '6px' })} />
                    } else if (type==="button"){
                        return (<Col md={{ span: prop.span, offset: prop.offset }}>
                                    <CustomButton buttonText={prop.label} classname={prop.class} textStyle={Styles.buttonText} />
                                </Col>);
                    } else if (type==='dropdown'){
                        
                    } else {
                        return null;
                    }
                })}
                </Row>
                <Divider />
                </>);
            } else if(key==="rows"){
                return (Array.isArray(data)?
                data.map((rows) => {
                    return (
                        <Row style={{ lineHeight: LINEHEIGHT }}>
                        {rows.row.map((cols)=>{
                            return <Cell span={cols.span} text={cols.text} style={Object.assign({}, Styles.labelLeftAlign)} />
                            //console.log(row);
                        })}
                        </Row>
                    )
                    
                })
                :<></>)
                {/* return (
                    <>
                    
                        <Cell span="2" text="Email" style={Object.assign({}, Styles.labelLeftAlign)} />
                        <Cell span="3" text="abc@gmnail.com" style={Styles.leftAlign} />
                        <Cell span="2" text="User Role" style={Object.assign({}, Styles.labelLeftAlign)} />
                        <Cell span="2" text="Super Admin" style={Styles.leftAlign} />
                    </Row>

                    <Row style={{ lineHeight: LINEHEIGHT }}>
                        <Cell span="2" text="Dial Code" style={Object.assign({}, Styles.labelLeftAlign)} />
                        <Cell span="3" text="+91" style={Styles.leftAlign} />
                    </Row>

                    <Row style={{ lineHeight: LINEHEIGHT }}>
                        <Cell span="2" text="Mobile" style={Object.assign({}, Styles.labelLeftAlign)} />
                        <Cell span="3" text="8375083217" style={Styles.leftAlign} />
                    </Row>
                    </>
            )} */}
            }
            else{
                return null;
            }
        })}
            
        </Container >

    )
}

export default UserHeader;