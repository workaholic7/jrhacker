import React, { Component } from 'react'
import '../../css/sidebar.css';
import JuniorHacker from '../../images/JuniorHacker.jpg';
import Menu from './Menu';

export default class SideBar extends Component {
    render() {
        return (
            <div className="menu" style={styles.menu}>
                <div className="logo">
                    <img src={JuniorHacker} alt="Junior-Hacker"  />
                </div>
                <Menu />
            </div>
        )
    }
}

const styles={
    menu : {
        background: '#FFFFFF !important',
        height: '100%',
        width: '256px',
        position: 'fixed',
        left: '0px',
        top: '0px',
    }
}