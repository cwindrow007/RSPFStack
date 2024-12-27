import React from 'react';
import LeftNav from "../Components/NavBar";
import TopBar from"../Components/TopBar";

const Inventory: React.FC =() =>{
    return(
        <div>
            <TopBar/>
            <LeftNav/>
            <h1>Inventory Page</h1>
        </div>
    );
}