import React from 'react';
import LeftNav from "../Components/NavBar";
import TopBar from"../Components/TopBar";

const Orders: React.FC =() =>{
    return(
        <div>
            <TopBar/>
            <LeftNav/>
            <h1>Orders Page</h1>
        </div>
    );
}