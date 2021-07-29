import React, {useState} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import "./stylesheet.css";
import Nameblock from './Nameblock';
import Header from './Header';
import Section from './Section';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';


const App = () => {
    const isLargeScreen = useMediaQuery('(min-width:450px)');

    const [drawHeader, setDrawHeader] = useState(false);
    const [selected, setSelected] = useState("Projects");
    const [blogCache, setBlogCache] = useState(undefined);
    const sections = {
        "Projects": <Projects
            isLargeScreen={isLargeScreen} />,
        "About": <About />,
        "Contact": <Contact />,
        "Blog": <Blog
            isLargeScreen={isLargeScreen}
            cache={blogCache}
            updateCache={setBlogCache}/>,
    }
    const [section, setSection] = useState(sections[selected]);

    const handleSectionSelect = (label) => {
        if (isLargeScreen === false) {
            setDrawHeader(true);
        };
        setSelected(label);
        setSection(sections[label]);
        
    };

    const renderedSection = (
        <Section label={selected}>
            {section}
        </Section>
    )

    return (
        <div className="content">
            {
            drawHeader === true?
                <Header
                    onSectionSelect={handleSectionSelect}
                    selected={selected}
                    setDrawHeader={setDrawHeader}/>:
                <Nameblock
                    onSectionSelect={handleSectionSelect}
                    selected={selected} />
            }

            {isLargeScreen || drawHeader === true? renderedSection:undefined}
            {/* if on mobile and using Nameblock, DON'T draw a section! */}
            <footer>
                <div>{"Created by Collin Sparks with React :)"}</div>
            </footer>
        </div>
    );
};

export default App;