import React, {Fragment} from 'react';

function StepThree({ formData, setFormData, handleSubmit, prevStep }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            <h2>Step Three</h2>
            <input name="fieldThree" value={formData.fieldThree} onChange={handleChange} placeholder="Field Three" />
            <button style={{marginLeft: 30}} onClick={prevStep}>Prev</button>
            <button style={{marginLeft: 30}} onClick={handleSubmit}>Submit</button>
        </Fragment>
    );
}

export default StepThree;
