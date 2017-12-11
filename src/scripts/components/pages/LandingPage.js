import React from "react";

import LandingPageImage from "./LandingPageImage";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-page">
                <h1 className="landing-page__title">Hello there</h1>
            </div>
        )
    }
};
