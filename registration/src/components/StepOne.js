import React from 'react';
import '../styles/StepOne.css';

const StepOne = ({ nextStep }) => {
  return (
    <>
      <h1 className="step-title">Hello, <br />Welcome to Shine Coin Tech</h1>
      <p className="text">Get started by selecting your country. Customize the app to suit your needs and preferences</p>
      <div className="country-container">
        <svg className="eng" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a8.988 8.988 0 0 1-.5 2.966m0-5.931h-17m0 0A8.987 8.987 0 0 0 3 12a8.99 8.99 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17" />
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21c4.97-4.97 4.97-13.03 0-18-4.97 4.97-4.97 13.03 0 18z" />
        </svg>
        <h2 className="coun">Country</h2>
      </div>
      <select className="select">
        <option>Select Country</option>
        {/* country options here */}
      </select>
      <label className="label">
        <input type="checkbox" className="checkbox" />
        I accept Shyn Coin’s terms & Privacy
      </label>
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
    </>
  );
};

export default StepOne;
