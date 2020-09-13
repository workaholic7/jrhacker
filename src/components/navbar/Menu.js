import React , {useState, useEffect} from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import {Link} from '@reach/router';
import menu from '../../menu.json';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

 

export default function Menu() {
    const [menuItems, setMenuItems] = useState();
    const [expanded, setExpanded] = useState(false);

    const toggleOperationsMenu = () =>{
        setExpanded( expanded ? false: true);
    }

    const items = [
        { name: 'Dashboard', url: '/' },
        { name: 'Operation', items: [
            { name: 'Students', url: '/students' },
            { name: 'Teachers', url: '/teachers' },
            { name: 'Teacher Slot Info', url: '/teachers/slot' },
            { name: 'Session', url: '/session' },
            { name: 'Payslip', url: '/payslip' },
          ], },
        { name: 'Logout', url: '/logout' },
      ]
        return (
        // <Navbar className="flex-column menu" style={styles.nav}>
        //     {/* <Nav.Link href="/"> Dashboard</Nav.Link>
        //     <Nav onClick={toggleOperationsMenu} >Operations</Nav>
        //         <Navbar className="flex-column" style={{display: expanded ? 'block':'none'}}>
        //             <NavLink href="/students">Students</NavLink>
        //             <NavLink href="/teachers">Teachers</NavLink>
        //             <Nav.Link href="/teachers/slot">Teachers Slot Info</Nav.Link>
        //             <Nav.Link href="/session">Session</Nav.Link>
        //             <Nav.Link href="/payslip">Payslip</Nav.Link>
        //         </Navbar>
        //     <Nav.Link href="/logout">Logout</Nav.Link> */}
            
        // </Navbar>
        <ul>
            {items.map(({ url, name, items:subItems, ...rest }) => (
                <li key={name} {...rest}>
                {Array.isArray(subItems) ? (
                    <>
                    {name}
                    <ul>
                        {subItems.map((subItem) => (
                        <li key={subItem.name}>
                            <Link to={subItem.url}>
                                {subItem.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </>
                ) : 
                <Link to={url}>
                {name}
                </Link>}
                </li>
            ))}
        </ul>
    )
}

const styles = {
    nav: {

    }
}