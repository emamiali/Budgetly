import React from 'react';

const Landing = () => {
  return (
    <div style={welcomeStyle} >
      <div>
        <h1>Welcome To Budgetly</h1>
        <p>Place to keep track of your spendings and savings</p>
      </div>
      <div className="valign-wrapper row">
        <div className="col s4">
          <h5>Step 1</h5>
          <p>Please Sign-up using your Google Account</p>
        </div>
        <div  className="col s4">
          <h5>Step 2</h5>
          <p>Enter in your Savings Goal and Your Income</p>
        </div>
        <div  className="col s4">
          <h5>Step 3</h5>
          <p>Add your bills and spednings and savings</p>
        </div>
      </div>
      <a href="/auth/google"className="waves-effect waves-light btn">Start</a>
    </div>
  );
};

export default Landing;


const welcomeStyle = {
  textAlign: 'center',

}