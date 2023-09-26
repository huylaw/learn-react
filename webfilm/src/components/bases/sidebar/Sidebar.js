import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Icon from '@mui/material/Icon';
import logo from "../../../assets/image/logo.png"

import "./Sidebar.scss";

export default function Sidebar(props) {
    const listMenu = [
        { path: '/', name: 'Home', icon: 'home', element: '<Home/>' },
        { path: '/about', name: 'About', icon: 'ac_unit', element: '<About/>' },
        { path: '/user', name: 'User', icon: 'person', element: '<User/>' }
    ];

    const menu1 = listMenu.map((item, index) => 
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

    const menu2 = listMenu.map((item, index) => 
        <NavLink 
            key={index}
            className="nav"
            to={ item.path } 
            element={ item.element }
        >
            <Icon>{ item.icon }</Icon>
        </NavLink>
    );

    return(
        <div 
            className="container-sidebar"
            style={{
                width: props.width,
            }}
        >
            <div className="icon-sidebar">
                {/* <Icon>apps</Icon> */}
                <img src={logo} alt="img"/>
            </div>
            {props.smallSize === false ? menu1 : menu2}
        </div>
    );
}

Sidebar.propTypes = {
    width: PropTypes.number.isRequired,
    smallSize: PropTypes.bool.isRequired
}

Sidebar.defaultProps = {
    width: 178,
    smallSize: false
}