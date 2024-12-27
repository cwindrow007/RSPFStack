import React from 'react';
import {Link} from "react-router-dom";
const NavBar = () =>{
    return(
        <div className="NavBar">
            <Link to = "/Products">
                <button>Products</button>
            </Link>
        </div>
    );

};
export default NavBar;