import React from 'react';
const UserContext = React.createContext({
    userId:0,
    role: '',
    token:'',
    updateUserDetails:() =>{
        
    }
});

export default UserContext;