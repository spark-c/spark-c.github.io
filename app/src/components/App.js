import React, {useState} from 'react';
import "./stylesheet.css";

import Nameblock from './Nameblock';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';


const App = () => {
    const [drawHeader, setDrawHeader] = useState(false);
    const sections = {
        "Projects": <Projects />,
        "About": <About />,
        "Contact": <Contact />
    }
    const [section, setSection] = useState("projects");

    const handleSectionSelect = (label) => {
        setSection(sections[label]);
    };

    return (
        <div className="content">
            {
            drawHeader === true?
                <Header onSectionSelect={handleSectionSelect} />:
                <Nameblock onSectionSelect={handleSectionSelect} />
            }
            <button onClick={() => setDrawHeader(!drawHeader)}>Swap!</button>

            {section}
        </div>
    );
};

export default App;