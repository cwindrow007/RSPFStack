import React from 'react';
import LeftNav from "../Components/NavBar";
import TopBar from"../Components/TopBar";

const Invoices: React.FC =() =>{
    return(
        <div>
            <TopBar/>
            <LeftNav/>
            <h1>Invoices Page</h1>
        </div>
    );
}