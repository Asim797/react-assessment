import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function Conditional({ condition }) {

    return (
        <Fragment>
            <Link style={{marginTop: 30}} to={"/"}>Back</Link>
            <h2>Conditional Rendering</h2>
            {condition ? (
                <p>The condition is true!</p>
            ) : (
                <p>The condition is false!</p>
            )}
        </Fragment>
    );
}

export default Conditional;
