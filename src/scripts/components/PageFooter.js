import React from "react";

const PageFooter = (props) => {
    const date = new Date();

    return (
        <footer>
            <h1>Footer</h1>
            <p>
                Developed & designed by Philip Fabianek<br/>
                © {date.getFullYear().toString()}
            </p>
        </footer>
    )
};

export default PageFooter;
