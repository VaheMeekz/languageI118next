import React from 'react';
import Menu from "./menu";
import Languages from "./languages";

const Header = () => {
    return (
        <header>
            <Menu/>
            <Languages/>
        </header>
    );
};

export default Header;