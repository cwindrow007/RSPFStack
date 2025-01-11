import React from 'react';
import '../CSS/version.css'

const AppVersion: React.FC = () =>{
    const version = "0.0.1";
    const author = "Christopher Windrow"

    return(
    <div className="version-info">
    Version: {version}
        <div>
            Author: {author}
        </div>
    </div>
);
};

export default AppVersion;