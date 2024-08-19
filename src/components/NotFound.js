import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function NotFound() {

    return (
        <Fragment>
            <Link style={{marginTop: 30}} to={"/"}>Back</Link>
            <p>404 - Page Not Found!</p>
        </Fragment>
    );
}

export default NotFound;
