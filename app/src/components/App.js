import React, {useState} from 'react';
import "./stylesheet.css";

import Nameblock from './Nameblock';
import Header from './Header';
import SectionButton from './SectionButton'


const App = () => {
    const [drawHeader, setDrawHeader] = useState(false);

    const header = (
        <Header>
            <SectionButton label="Projects" target="Projects" />
            <SectionButton label="About" target="About" />
            <SectionButton label="Contact" target="Contact" />
        </Header>
    );

    const nameblock = (
        <Nameblock>
            <SectionButton label="Projects" target="Projects" />
            <SectionButton label="About" target="About" />
            <SectionButton label="Contact" target="Contact" />
        </Nameblock>
    );

    return (
        <div className="content">
            {drawHeader === true? header:nameblock}
            <button onClick={() => setDrawHeader(!drawHeader)}>Swap!</button>
        </div>
    );
};

export default App;