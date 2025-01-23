import React from 'react';
import TopNav from "../Components/TopBar";
import LeftNav from "../Components/NavBar";
import TableCreation from "../Components/Modals/CreateTableModal";

const Products: React.FC = () => {
    return(
        <div>
            <TopNav/>
            <LeftNav/>
            <h1 className = "text-2xl text-black font-bold">Products</h1>
            <p>This is the Products Page</p>
            <TableCreation/>
        </div>

    );

};
export default Products;