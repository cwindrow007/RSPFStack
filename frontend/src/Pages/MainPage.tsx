import React from 'react';
import {Link} from "react-router-dom";
import LeftNav from "../Components/NavBar";
import TopBar from "../Components/TopBar"

const MainPage: React.FC = () => {
    return(
        <div>
            <TopBar/>
            <h1>Welcome to the RSPF Inventory Management System</h1>
            <p>This page is yet to be filled but for now it is in testing before design and layout</p>
        <LeftNav/>
        </div>
    );
};

export default MainPage;