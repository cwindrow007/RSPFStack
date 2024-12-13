import React from 'react';
import {Link} from "react-router-dom";

const MainPage: React.FC = () => {
    return(
        <div>
            <h1>Welcome to the RSPF Inventory Management System</h1>
            <p>This page is yet to be filled but for now it is in testing before design and layout</p>
            <Link to = "/products">
                <button>Go To Products</button>
            </Link>
        </div>
    );
};

export default MainPage;