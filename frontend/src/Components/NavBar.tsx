import React from 'react';
import {Link} from "react-router-dom";
import  '../CSS/NavBar.css'

//Import Icons
import HomeIcon from "../Icons/Home.png";
import ProductsIcon from "../Icons/Products.png";
import OrdersIcon from "../Icons/Orders.png";
import InventoryIcon from "../Icons/Inventory.png";
import InvoicesIcon from "../Icons/Invoices.png";
import DataIcon from "../Icons/Data.png";
import logo from "../Icons/LogoIcon.png"


/** Nav Bar, holds data to links on the left side and program logo*/
const NavBar = () =>{
    const linker = [
        { to: '/', name: 'Main', icon: HomeIcon},
        { to: '/Products', name: "Products", icon: ProductsIcon},
        { to: '/Orders', name: "Orders", icon: OrdersIcon},
        { to: '/Inventory', name: "Inventory", icon: InventoryIcon},
        { to: '/Invoices', name: "Invoices", icon: InvoicesIcon},
        { to: '/Data', name: "Data", icon: DataIcon},
    ]
    return(
        <div className="NavBar">
            {/*Program Logo */}
            {/* <img className = "header-logo" src = {logo} alt = "RSPF Logo"/> */}
            <div>
                <h1 className="Header">Pages</h1>
                <ul>
                {linker.map((link, index)=>(
                    <li key = {index} className = "nav-item">
                    <Link to={link.to} className = "nav-link">
                        <img src = {link.icon} alt={`${link.name} Icon`} className="nav-icon"/>
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );

};
export default NavBar;