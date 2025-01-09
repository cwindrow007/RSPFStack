import React from 'react';
import {Link} from "react-router-dom";

//Import Icons

import HomeIcon from "../Icons/Home.png";
import ProductsIcon from "../Icons/Products.png";
import OrdersIcon from "../Icons/Orders.png";
import InventoryIcon from "../Icons/Inventory.png";
import InvoicesIcon from "../Icons/Invoices.png";
import DataIcon from "../Icons/Data.png";


/** Nav Bar, holds data to links on the left side and program logo*/
const NavBar = () =>{
    const linker = [
        {
            to: '/',
            name: 'Main',
            icon: HomeIcon
        },
        {
            to: '/Products',
            name: "Products",
            icon: ProductsIcon
        },
        {
            to: '/Orders',
            name: "Orders",
            icon: OrdersIcon
        },
        {
            to: '/Inventory',
            name: "Inventory",
            icon: InventoryIcon
        },
        {
            to: '/Invoices',
            name: "Invoices",
            icon: InvoicesIcon
        },
        {
            to: '/Data',
            name: "Data",
            icon: DataIcon
        },


    ]
    return(
        <div className="NavBar">
            {/*Program Logo */}
            <h1 className = "Placeholder">
                RSPF Inventory System
            </h1>
            <div>
                {linker.map(link=>(
                    <Link to={link.to}>
                    <ul>
                        <img src = {link.icon} alt = {link.name}/>
                        {link.name}
                    </ul>
                </Link>))}
            </div>
        </div>
    );

};
export default NavBar;