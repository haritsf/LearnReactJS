import React, { Fragment } from 'react';
import reactlogo from "../images/logo192.png";

const HelloComponent = () => {
    return (
        <Fragment>
            <h1>React App</h1>
            <div className="product-by">
                <p>Powered By <img src={reactlogo} width="30px" alt="React Logo" /></p>
            </div>
        </Fragment>
    )
}

export default HelloComponent;