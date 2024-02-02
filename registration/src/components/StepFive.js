import React from 'react';


const StepFive = ({ nextStep }) => {
  return (
    <>
      <h1 className="step-title">About to finish. You can now set your email</h1>
      <p className="text">Please, use an active and correct email address; we will be sending you verification mail. Also, set a strong password to protect your account.</p>
      <input className="input" type="email" placeholder="Email Address" />
      <input className="input" type="password" placeholder="Password" />
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
    </>
  );
};

export default StepFive;
