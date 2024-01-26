// src/components/StepOne.js
import React, { useState } from 'react';
import { ReactComponent as Reg1SVG } from '../assets/Reg1.svg'; // Path to your SVG file
import './StepOne.css';

const StepOne = ({ formData, updateFormData, nextStep }) => {
  const [country, setCountry] = useState(formData.country || '');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    updateFormData({ country: event.target.value });
  };

  return (
    <div className="form-step form-step-one">
      <Reg1SVG className="form-background" />
      <form onSubmit={nextStep}>
        <label htmlFor="country-select">Country</label>
        <select id="country-select" value={country} onChange={handleCountryChange} required>
          {/* Populate with actual country options */}
          <option value="">Select Country</option>
          <option value="USA">United States</option>
          {/* ...other countries */}
        </select>
        {/* Other form elements */}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepOne;
