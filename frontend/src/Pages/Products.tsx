import React from 'react';
import {Link} from "react-router-dom";

const Products: React.FC = () => {
    return(
        <div>
            <h1>Products</h1>
            <p>This is the Products Page</p>
            <Link to = "/">
                <button>Main Page</button>
            </Link>
        </div>

    );

};
export default Products;