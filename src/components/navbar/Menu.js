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
        <ul>
            {items.map(({ url, name, items:subItems}) => {
                
                return (Array.isArray(subItems) ? (
                    <>
                    <li key={name} > {name}
                    <ul>
                        {subItems.map((subItem) => (
                        <li key={subItem.name}>
                            <Link to={subItem.url}>
                                {subItem.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </li>
                    </>
                ) 
                 : 
                <li key={name} >
                <Link to={url}>
                {name}
                </Link>
                </li>
                )
                
            })}
        </ul>
    )
}

const styles = {
    nav: {

    }
}