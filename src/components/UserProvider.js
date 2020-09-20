import UserContext from './UserContext';
import React, {useState} from "react";
import getUserRole from './Util';

function UserProvider(props){
    const [userId, setUserId] = useState(2);
    const [role, setRole] = useState('Admin');

    const setUserDetails= ({id, role}) => {
        setUserId(id);
        setRole(getUserRole(role));
    }

    return (
        <UserContext.Provider value={[userId, role, setUserDetails]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;