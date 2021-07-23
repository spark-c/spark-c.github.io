import React from 'react';


const Socials = () => {

    return (
        <div className="socials-container">
            <div className="socials-title">Socials</div>
            <div className="socials-items">
                <a href="https://github.com/spark-c">
                    <i className="fa fa-github"></i>
                    <div className="social-label">
                        spark-c
                    </div>
                </a>
                <a href="https://twitter.com/collin_sparkles">
                    <i className="fa fa-twitter"></i>
                    <div className="social-label">
                        @collin_sparkles
                    </div>
                </a>
                <a href="https://linkedin.com/in/collin-sparks">
                    <i className="fa fa-linkedin"></i>
                    <div className="social-label">
                        Collin Sparks
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Socials;