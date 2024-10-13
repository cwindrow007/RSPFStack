import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import VersionInfo from './Components/AppVersion';

const App: React.FC = () => {
  return (
      <Router>
              <Routes>
                  <Route path = "/" element = {<MainPage />} />
              </Routes>
          <VersionInfo/>
      </Router>
  );
};


export default App;
