import React from 'react';
import LeftNav from "../Components/NavBar";
import TopBar from "../Components/TopBar"
import QuickAction from "../Components/Modals/QuickActionModal"

const MainPage: React.FC = () => {
    return(
        <div className="flex h-screen">
            <aside className="flex-shrink-0">
                <TopBar/>
                <LeftNav/>
            </aside>
            <main className = "flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl text-blue-500  underline font-bold">
                        Welcome to the RSPF Inventory Management System
                    </h1>
                    <p>
                        This page is yet to be filled but for now it is in testing before design and layout
                    </p>
                    <QuickAction/>
                </div>
            </main>
        </div>
    );
};

export default MainPage;