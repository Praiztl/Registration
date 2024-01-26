// src/index.js
import React, { useState } from 'react';
import StepOne from './components/StepOne';
// ...import other steps

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    username: '',
    // ...other fields
  });

  // Function to update the formData state
  const updateFormData = (newData) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      ...newData
    }));
  };

  // Function to proceed to the next step
  const nextStep = () => {
    setCurrentStep(prevCurrentStep => prevCurrentStep + 1);
  };

  // ...JSX to render the current step
  return (
    <div>
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
        />
      )}
      {/* ...other steps conditionally rendered */}
    </div>
  );
};

export default RegistrationForm;
