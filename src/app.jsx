import React, { Component } from 'react';
import { Alert } from './alert';
import { Change } from './change';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      change: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: parseFloat(value) });
  }

  clickEvent(e) {
    e.preventDefault();
    const change = this.calculateChange(this.state.amountDue, this.state.amountReceived);

    this.setState({ change: parseFloat(change) });
  }

  calculateChange(due, received) {
    return parseFloat(received - due).toFixed(2);
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-white'>Change Calculator</h1>
        <hr className='tagline' />
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <div className='card-header'>
                Enter Information
              </div>
              <div className='card-block'>
                <label htmlFor='amount-due' className='max-width'>
                  How much is due?
                  <input
                    id='amount-due'
                    name='amountDue'
                    type='number'
                    placeholder='$0.00'
                    className='btn-block'
                    value={ this.state.due }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor='amount-received'>
                  How much was received?
                  <input
                    id='amount-received'
                    name='amountReceived'
                    type='number'
                    placeholder='$0.00'
                    className='btn-block'
                    value={ this.state.received }
                    onChange={ this.handleChange }
                  />
                </label>
              </div>
              <div className='card-footer'>
                <button
                  name='submit'
                  type='button'
                  className='btn btn-primary btn-block'
                  onClick={ this.clickEvent }
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='card'>
              <div className='card-block'>
                <Alert change={ this.state.change } />
                <Change change={ this.state.change } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// 1) should include an input element for the user to enter amount due
// 2) should include an input element for the user to enter amount received
// 3) should include a button for the user to calculate change
// 4) should calculate total change correctly
// 5) should calculate individual change correctly
