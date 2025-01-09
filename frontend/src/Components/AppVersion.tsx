import React from 'react';
import '../CSS/version.css'

const AppVersion: React.FC = () =>{
    const version = "0.0.1";

    return(
    <div className="version-info">
    Version: {version}
    </div>
);
};

export default AppVersion;