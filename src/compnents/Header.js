import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <h1> Pharmarun Expense Mnagement App</h1>
            <hr />
            <div className="links">
            <NavLink to="/" className="link" activeClassName="active" exact>
          Expense List
        </NavLink> 
        <NavLink to="/" classname="link" activeClassName="active exact">
            Add Expense
        </NavLink>
            </div>
        </header>
    );
};
export default Header;