import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the common CSS file
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepIndicators = () => {
    let indicators = [];
    for (let i = 1; i <= totalSteps; i++) {
        indicators.push(
            <div
                key={`step-rect-${i}`}
                className={`rect-indicator ${i <= step ? 'rect-indicator--active' : ''}`}
            />
        );
    }
    return <div className="rect-indicator-container">{indicators}</div>;
};



  const steps = [
    <StepOne nextStep={nextStep} />,
    <StepTwo nextStep={nextStep} />,
    <StepThree nextStep={nextStep} />,
    <StepFour nextStep={nextStep} />,
    <StepFive nextStep={nextStep} />,
  ];

  return (
    <div className="container">
      <div className="step-container">
        <div className='globe'>
          <div className="back-button" onClick={prevStep}>&#x2190;</div>
          <div className="globe-with-text">
          <svg  className="eng" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a8.988 8.988 0 0 1-.5 2.966m0-5.931h-17m0 0A8.987 8.987 0 0 0 3 12a8.99 8.99 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21c4.97-4.97 4.97-13.03 0-18-4.97 4.97-4.97 13.03 0 18z"/></svg>
          <span className="globe-text">English</span>
           </div>
        </div>
      <div className="header">
          {renderStepIndicators()}
          <div className="step-counter">Step {step} / {totalSteps}</div>
        </div>
        {steps[step - 1]}
      </div>
    </div>
  );
};

export { RegistrationForm };
