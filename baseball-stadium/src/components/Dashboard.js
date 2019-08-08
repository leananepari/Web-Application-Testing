import React from 'react';
import { strike, ball, foul, hit } from './../helpers.js';

function Dashboard({ update, balls, strikes }) {

  const handleClick = (e, func) => {
    e.preventDefault();
    if (func === strike) {
      console.log('true')
      let result = strike(strikes);
      update(null, result)
    } else if (func === ball) {
      let result = ball(balls);
      update(result, null)
    } else if (func === foul) {
      let result = foul(strikes);
      update(null, result);
    } else {
      update(0, 0)
    }
  }

  return (
    <div style={{width: '50%', height: '200px', border: '1px solid black', margin: '0 auto', marginTop: '40px'}}>
      <h2>Dashboard</h2>
      <div>
        <button onClick={(e) => handleClick(e, strike)}>Strike</button>
        <button onClick={(e) => handleClick(e, ball)}>Ball</button>
        <button onClick={(e) => handleClick(e, foul)}>Foul</button>
        <button onClick={(e) => handleClick(e, hit)}>Hit</button>
      </div>
    </div>
  )
}

export default Dashboard;