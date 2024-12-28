import React from 'react';
import LeftNav from "../Components/NavBar";
import TopBar from"../Components/TopBar";

const Data: React.FC =() =>{
    return(
        <div>
            <TopBar/>
            <LeftNav/>
            <h1>Data Page</h1>
        </div>
    );
}
export default Data;