import React from 'react';
import {routes} from "../utils/routes";
import {NavLink} from "react-router-dom";

const Menu = () => {

    return (
        <ul className='menu'>
            {
                routes.map(({path, name}) => {
                    return <li key={path}>
                        <NavLink
                            to={path}
                            className='link'
                            activeClassName='active'
                            exact
                        >
                            {name}
                        </NavLink>
                    </li>
                })
            }
        </ul>
    );
};

export default Menu;