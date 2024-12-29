import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Inventory from "./Pages/Inventory";
import Invoices from "./Pages/Invoices";
import Data from "./Pages/Data";


import VersionInfo from './Components/AppVersion';

const App: React.FC = () => {
  return (
      <Router>
          <header>
            <nav>

            </nav>
          </header>
          <main>
              <Routes>
                  <Route path = "/" element = {<MainPage />} />
                  <Route path = "/Products" element = {<Products/>}/>
                  <Route path = "/Orders" element = {<Orders/>}/>
                  <Route path = "/Inventory" element = {<Inventory/>}/>
                  <Route path = "/Invoices" element = {<Invoices/>}/>
                  <Route path = "/Data" element = {<Data/>}/>
              </Routes>
          </main>
          <VersionInfo/>
      </Router>
  );
};


export default App;
