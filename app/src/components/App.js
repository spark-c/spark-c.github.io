import React, {useState} from 'react';
import "./stylesheet.css";

import Nameblock from './Nameblock';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const App = () => {
    const isLargeScreen = useMediaQuery('(min-width:450px)');

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
        setSection(sections[label]);
        
    };

    return (
        <div className="content">
            {
            drawHeader === true?
                <Header onSectionSelect={handleSectionSelect} selected={selected} />:
                <Nameblock onSectionSelect={handleSectionSelect} selected={selected} />
            }
            <button onClick={() => setDrawHeader(!drawHeader)}>Swap!</button>

            {isLargeScreen || drawHeader === true? section:undefined}
            {/* if on mobile and using Nameblock, DON'T draw a section! */}
        </div>
    );
};

export default App;