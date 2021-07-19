import React from 'react';
import "./stylesheet.css";
import Nameblock from './Nameblock';
import Header from './Header';


const App = () => {

    return (
        <div className="content">
            <Header />
            <Nameblock />
        </div>
    );
};

export default App;