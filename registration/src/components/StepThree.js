// StepThree.js
import React from 'react';


const StepThree = ({ nextStep }) => {
  return (
    <>
      <h1 className="step-title">Hello jawad01, please provide us your legal name</h1>
      <p className="text">We might require you to submit valid documents to verify your name, ensure to use correct names</p>
      <input className="input" type="text" placeholder="First name" />
      <input className="input" type="text" placeholder="Last Name" />
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
    </>
  );
};

export default StepThree;
