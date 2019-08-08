import React from 'react';

function Display({ balls, strikes}) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div>
        <h1>Balls</h1>
        <div style={{width: '150px', height: '50px', border: '1px solid black', verticalAlign: 'center', lineHeight: '50px', fontSize: '28px'}}>
             {balls}
        </div>
      </div>
      <div>
        <h1>Strikes</h1>
        <div style={{width: '150px', height: '50px', border: '1px solid black', verticalAlign: 'center', lineHeight: '50px', fontSize: '28px'}}>
             {strikes}
        </div>
      </div>
    </div>
  )
}

export default Display;