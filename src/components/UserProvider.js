import UserContext from './UserContext';
import React from "react";

class UserProvider extends React.Component {
    render() {
        return (
            <UserContext.Provider>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;