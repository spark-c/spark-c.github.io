import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Socials = () => {

    const isLargeScreen = useMediaQuery('(min-width:600px)');

    return (
        <div className="socials-container">
            <div className="socials-title">Socials</div>
            <div className="socials-items">
                <a href="https://github.com/spark-c">
                    <i className="fa fa-github"></i>
                    <div className={isLargeScreen? "social-label":"hidden"}>
                        spark-c
                    </div>
                </a>
                <a href="https://twitter.com/collin_sparkles">
                    <i className="fa fa-twitter"></i>
                    <div className={isLargeScreen? "social-label":"hidden"}>
                        @collin_sparkles
                    </div>
                </a>
                <a href="https://linkedin.com/in/collin-sparks">
                    <i className="fa fa-linkedin"></i>
                    <div className={isLargeScreen? "social-label":"hidden"}>
                        Collin Sparks
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Socials;