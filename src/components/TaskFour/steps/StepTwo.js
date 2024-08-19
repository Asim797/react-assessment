import React, {Fragment} from 'react';

function StepTwo({ formData, setFormData, nextStep, prevStep }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            <h2>Step Two</h2>
            <input name="fieldTwo" value={formData.fieldTwo} onChange={handleChange} placeholder="Field Two" />
            <button style={{marginLeft: 30}} onClick={prevStep}>Prev</button>
            <button style={{marginLeft: 30}} onClick={nextStep}>Next</button>
        </Fragment>
    );
}

export default StepTwo;
