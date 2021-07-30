import React from "react";

import ShowMoreText from "react-show-more-text";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            myProgress: 25
        };
    }

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        return (
            <div>
                <ShowMoreText
                    /* Default options */
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass='example_css_class'
                    className='example_css_class'
                    onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                    <p>Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" className="my_css_class" rel="noopener noreferrer" target="_blank">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, <a href="https://www.google.bg/" title="Google" rel="noopener noreferrer" target="_blank">www.google.bg</a> quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>


                    <p>et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>


                    <p>ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur</p>

                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" className="my_css_class" rel="noopener noreferrer" target="_blank">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, <a href="https://www.google.bg/" title="Google" rel="noopener noreferrer" target="_blank">www.google.bg</a> quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                    <p>do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                </ShowMoreText>
            </div>
        );
    }
}
