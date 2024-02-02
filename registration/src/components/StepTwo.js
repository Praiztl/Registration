// StepTwo.js
import React from 'react';


const StepTwo = ({ nextStep }) => {
  return (
    <>
      <h1 className="step-title">Welcome to Shyn Coin Tech</h1>
      <p className="text">Feel free to choose a really cool name that other users can use to find you, e.g., cryptolord, cryptobaby, joy01, etc.</p>
      <input className="input" type="text" placeholder="Input username" />
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">OR CONTINUE WITH:</p>
      {/* social media login buttons here */}
      <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
    </>
  );
};

export default StepTwo;
