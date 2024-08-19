import React, { useState } from 'react';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

function StepForm() {
    const [formData, setFormData] = useState({ fieldOne: '', fieldTwo: '', fieldThree: '' });
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (validateStep()) {
            setStep(prevStep => prevStep + 1);
        }else{
            alert('Validation failed');
        }
    };

    const prevStep = () => setStep(prevStep => prevStep - 1);

    const validateStep = () => {
        switch (step) {
            case 1:
                return formData.fieldOne.trim() !== '';
            case 2:
                return formData.fieldTwo.trim() !== '';
            case 3:
                return formData.fieldThree.trim() !== '';
            default:
                return false;
        }

    };

    const handleSubmit = () => {
        if (validateStep()) {
            alert('Form submitted: '+ JSON.stringify(formData));
        } else {
            alert('Validation failed');
        }
    };

    switch (step) {
        case 1:
            return <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <StepThree formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} prevStep={prevStep} />;
        default:
            return null;
    }
}

export default StepForm;
