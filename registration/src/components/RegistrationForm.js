// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const StepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h1 className="step-title">Hello, Welcome to Shine Coin Tech</h1>
            <p className="text">Get started by selecting your country. Customize the app to suit your needs and preferences</p>
            <select className="select">
              <option>Select Country</option>
              {/* Add country options here */}
            </select>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              I accept Shyn Coin’s terms & Privacy
            </label>
            <button className="button" onClick={nextStep}>Proceed</button>
            <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="step-title">Welcome to Shyn Coin Tech</h1>
            <p className="text">Feel free to choose a really cool name that other users can use to find you, e.g., cryptolord, cryptobaby, joy01, etc.</p>
            <input className="input" type="text" placeholder="Input username" />
            <button className="button" onClick={nextStep}>Proceed</button>
            <p className="text">OR CONTINUE WITH:</p>
            {/* Include social media login buttons here */}
            <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
          </>
        );
      case 3:
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
      case 4:
        return (
          <>
            <h1 className="step-title">Thank you jawad01, please, provide us your phone number.</h1>
            <p className="text">An OTP will be sent to this number, please, ensure it’s correct.</p>
            <input className="input" type="tel" placeholder="(234) e.g 8171169970" />
            <button className="button" onClick={nextStep}>Proceed</button>
            <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
          </>
        );
      case 5:
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
      default:
        return <p className="text">Unknown step</p>;
    }
  };

  return (
    <div className="container">
      <div className="step-container">
        <div className="header">
          <div className="back-button" onClick={prevStep}>&#x3c;</div>
          <div className="step-counter">Step {step} / 4</div>
        </div>
        {StepContent()}
      </div>
    </div>
  );
};

export { RegistrationForm };