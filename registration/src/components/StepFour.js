// StepFour.js
import React from 'react';


const StepFour = ({ nextStep }) => {
  return (
    <>
      <h1 className="step-title">Thank you jawad01, please, provide us your phone number.</h1>
      <p className="text">An OTP will be sent to this number, please, ensure it’s correct.</p>
      <input className="input" type="tel" placeholder="(234) e.g 8171169970" />
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
    </>
  );
};

export default StepFour;
