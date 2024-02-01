// StepOne.js
import React from 'react';
import '../styles/StepOne.css';

const StepOne = ({ nextStep }) => {
  return (
    <>

      <h1 className="step-title">Hello, <br/>Welcome to Shine Coin Tech</h1>
      <p className="text">Get started by selecting your country. Customize <br/>the app to suit your needs and preferences</p>
    <h2 className="coun">Country</h2>
      <select className="select">
        <option>Select Country</option>
        {/* Add country options here */}
      </select>
      <label className="label"> 
        <input type="checkbox" className="checkbox" />

          I accept Shyn Coin’s<span className='tp'>terms & Privacy</span>
     </label>
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
    </>
  );
};

export default StepOne;
