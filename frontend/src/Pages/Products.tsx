import React from 'react';
import TopNav from "../Components/TopBar";
import LeftNav from "../Components/NavBar";
import TableCreationButton from "../Components/Modals/CreateTableModal";
import NewEntryForm from "../Components/Modals/NewEntryForm";

const Products: React.FC = () => {
    return(
        <div className="flex h-screen">
            <aside className = "flex-shrink-0">
                <TopNav/>
                <LeftNav/>
            </aside>
            <main className = "flex-1 flex items-center justify-center" >
                <div className = "text-center" >
                    <h1 className="text-2xl font-bold underline">
                        Products
                    </h1>
                    <p>Products Info</p>
                    <TableCreationButton/>
                    <NewEntryForm/>
                </div>
            </main>
        </div>

    );

};
export default Products;