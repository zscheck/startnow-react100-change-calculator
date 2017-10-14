import React from 'react';

export class Change extends React.Component {
  render() {
    const change = this.props.change;
    const dollars = Math.trunc(change);
    let twenties = Math.trunc(dollars / 20);
    const dollarsLeft1 = dollars % 20;
    let tens = Math.trunc(dollarsLeft1 / 10);
    const dollarsLeft2 = dollarsLeft1 % 10;
    let fives = Math.trunc(dollarsLeft2 / 5);
    let ones = Math.trunc(dollarsLeft2 % 5);

    let dchange = change % 1;
    dchange = Math.round(dchange *= 100);
    let quarters = parseInt(dchange / 25);
    let qchange = dchange % 25;
    qchange = Math.round(qchange); //to be safe incase of that weird glitch

    let dimes = parseInt(qchange / 10);
    let dichange = qchange % 10; 
    dichange = Math.round(dichange); //doing it of every step
  
    let nickels = parseInt(dichange / 5);
    let pennies = dichange % 5;
    pennies = Math.round(pennies); //just in case that glitch comes up again
 
    if (change < 0) {
      twenties = 0; tens = 0; fives = 0; ones = 0;quarters = 0;dimes = 0;nickels = 0;pennies = 0;
    }

    return (
      <div className='row'>
        <div className='well col-3 text-center card'>
          <h4>Twenties</h4>
          <p className='lead'>{twenties}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Tens</h4>
          <p className='lead'>{tens}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Fives</h4>
          <p className='lead'>{fives}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Ones</h4>
          <p className='lead'>{ones}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Quarters</h4>
          <p className='lead'>{quarters}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Dimes</h4>
          <p className='lead'>{dimes}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Nickels</h4>
          <p className='lead'>{nickels}</p>
        </div>
        <div className='well col-3 text-center card'>
          <h4>Pennies</h4>
          <p className='lead'>{pennies}</p>
        </div>
      </div>
    );
  }
}
