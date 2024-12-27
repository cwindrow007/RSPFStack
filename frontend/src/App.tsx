import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Products from "./Pages/Products";
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
                  <Route path = "/Products" element = {<Products/>} />
              </Routes>
          </main>
          <VersionInfo/>
      </Router>
  );
};


export default App;
