import React from 'react';
import Company from '../Company/Company';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <HeaderMain></HeaderMain>
            <Company></Company>
        </div>
    );
};

export default Header;