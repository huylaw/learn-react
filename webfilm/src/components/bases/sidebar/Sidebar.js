import { NavLink } from "react-router-dom";
import Icon from '@mui/material/Icon';
import logo from "../../../assets/image/logo.png"

import "./Sidebar.scss";

export default function Sidebar({ width }) {
    const listMenu = [
        { path: '/', name: 'Home', icon: 'home', element: '<Home/>' },
        { path: '/about', name: 'About', icon: 'ac_unit', element: '<About/>' },
    ];

    const menu = listMenu.map((item, index) => 
        <NavLink 
            key={index}
            className="nav"
            to={ item.path } 
            element={ item.element }
        >
            <Icon>{ item.icon }</Icon>
            { item.name }
        </NavLink>
    );

    return(
        <div 
            className="container-sidebar"
            style={{
                width: width,
            }}
        >
            <div className="icon-sidebar">
                {/* <Icon>apps</Icon> */}
                <img src={logo} alt="img"/>
            </div>
            {menu}
        </div>
    );
}