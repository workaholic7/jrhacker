import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import UserContext from '../../App';
import JuniorHacker from '../../images/icon/students.png';


export default function Menu() {
    //const { id, role } = useContext(UserContext);
    const [selected, setSelected] = useState('Dashboard');
    const [expanded, setExpanded] = useState('');

    const toggleSubMenu = (menu) => {
        if(expanded===menu){
            setExpanded('');
        } else{
            setExpanded(menu);
        }
    }

    const setSelectedMenu = (menu) =>{
        setSelected(menu);
    }



    const items = [
        { name: 'Dashboard', url: '/', icon:'dashboard' },
        {
            name: 'Operation', icon:'operations', items: [
                { name: 'Students', url: '/students', icon:'students' },
                { name: 'Teachers', url: '/teachers', icon:'teachers'  },
                { name: 'Teacher Slot Info', url: '/teachers/slot', icon:'slotInfo'  },
                { name: 'Session', url: '/session', icon:'session'  },
                { name: 'Payslip', url: '/payslip', icon:'payslip'  },
            ],
        },
        { name: 'Logout', url: '/logout', icon:'logout' },
    ]
    return (
        <ul className="side-menu">
            {items.map(({ url, name, items: subItems, icon }) => {

                return (Array.isArray(subItems) ? (
                        <li key={name}> 
                            <span onClick={()=>toggleSubMenu(name)}>
                                <img src={require(`../../images/icon/${icon}.png`)} alt={name} />
                                {name}
                            </span>
                            <ul className="sub-menu" style={{display:expanded===name?'block':'none'}}>
                                {subItems.map((subItem) => (
                                    <li className={subItem.name===selected?'active-menu':''} key={subItem.name} onClick={()=>setSelectedMenu(subItem.name)}>
                                        <Link to={subItem.url}>
                                            <img src={require(`../../images/icon/${subItem.icon}.png`)} alt={subItem.name} />
                                            {subItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                    :
                    <li key={name} className={name===selected?'active-menu':''} onClick={()=>setSelectedMenu(name)}>
                        <Link to={url}>
                        <img src={require(`../../images/icon/${icon}.png`)} alt={name} />
                            {name}
                        </Link>
                    </li>
                )

            })}
        </ul>
    )
}