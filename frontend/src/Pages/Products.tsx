import React from 'react';
import TopNav from "../Components/TopBar";
import LeftNav from "../Components/NavBar";

const Products: React.FC = () => {
    return(
        <div>
            <TopNav/>
            <LeftNav/>
            <h1>Products</h1>
            <p>This is the Products Page</p>
        </div>

    );

};
export default Products;