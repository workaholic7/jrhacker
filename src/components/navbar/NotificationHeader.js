import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import TextButton from '../common/TextButton';

export default function NotificationHeader({count}) {
    return (
        
                <div style={styles.col}>
                    {/* <Button > You Have {count} notifications <FontAwesomeIcon icon={faBell} /> </Button> */}
                    <TextButton style={styles.style} icon={<FontAwesomeIcon icon={faBell} />} >
                            <div style={styles.text}>
                                You have {count} notifications
                            </div>
                    </TextButton>
                </div>
            
    )
}

const styles={
    col : {
        position: 'absolute',
    
    width: '100%',
    height: '60px',
    },
    style :{
        position: 'absolute',
        width: '299px',
        height: '35px',
        left: '850px',
        top: '12px',

        background: '#E5F5FF',
        borderColor: 'inherit',
        borderRadius: '4px',
        // borderColor: '#E5F5FF',
    }, text : {
        
        height: '24px',

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        /* identical to box height, or 150% */
        color: '#3C3C3C',
    } 
}

// const StyledCol = styled.col`
//         left: 256px,
//         top: 0px,
//         height : 60px;
// `;