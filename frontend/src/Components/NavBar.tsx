import React from 'react';
import {Link} from "react-router-dom";
/** Nav Bar, holds data to links on the left side and program logo*/
const NavBar = () =>{
    const linker = [
        {
            to: '/',
            name: 'Main'
        },
        {
            to: '/Products',
            name: "Products"
        },
        {
            to: '/Orders',
            name: "Orders"
        },
        {
            to: '/Inventory',
            name: "Inventory"
        },
        {
            to: '/Invoices',
            name: "Invoices"
        },
        {
            to: '/Data',
            name: "Data"
        },


    ]
    return(
        <div className="NavBar">
            <h1>RSPF Inventory System</h1>
            <div>
                {linker.map(link=>(<Link to={link.to}><li>{link.name}</li></Link>))}
            </div>
        </div>
    );

};
export default NavBar;