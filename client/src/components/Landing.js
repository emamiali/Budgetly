import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }} >
      <div>
        <h1>Welcome To Budgetly</h1>
        <p>Place to keep track of your spendings and savings</p>
      </div>
      <div className="valign-wrapper row">
        <div className="col s4">
          <h5>Step 1</h5>
          <p>lorem ipsum</p>
        </div>
        <div  className="col s4">
          <h5>Step 2</h5>
          <p>lorem ipsum</p>
        </div>
        <div  className="col s4">
          <h5>Step 3</h5>
          <p>lorem ipsum</p>
        </div>
      </div>
      <button>Start</button>
    </div>
  );
};

export default Landing;
