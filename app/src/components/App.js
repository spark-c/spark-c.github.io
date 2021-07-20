import React, {useState} from 'react';
import "./stylesheet.css";

import Nameblock from './Nameblock';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';


const App = () => {
    const [drawHeader, setDrawHeader] = useState(false);
    const [selected, setSelected] = useState("Projects");
    const sections = {
        "Projects": <Projects />,
        "About": <About />,
        "Contact": <Contact />
    }
    const [section, setSection] = useState(selected);

    const handleSectionSelect = (label) => {
        setSelected(label)
        setSection(sections[selected]);
        
    };

    return (
        <div className="content">
            {
            drawHeader === true?
                <Header onSectionSelect={handleSectionSelect} selected={selected} />:
                <Nameblock onSectionSelect={handleSectionSelect} selected={selected} />
            }
            <button onClick={() => setDrawHeader(!drawHeader)}>Swap!</button>

            {section}
        </div>
    );
};

export default App;