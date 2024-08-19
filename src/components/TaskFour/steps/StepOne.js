import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function StepOne({ formData, setFormData, nextStep }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            <Link style={{marginTop: 30}} to={"/"}>Back</Link>
            <h2>Step One</h2>
            <input name="fieldOne" value={formData.fieldOne} onChange={handleChange} placeholder="Field One" />
            <button style={{marginLeft: 30}} onClick={nextStep}>Next</button>
        </Fragment>
    );
}

export default StepOne;
