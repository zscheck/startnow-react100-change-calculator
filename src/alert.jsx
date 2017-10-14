import React from 'react';

export class Alert extends React.Component {
  render() {
    if (this.props.change == null) {
      return <div />;
    }
    if (this.props.change >= 0) {
      return (
        <div className='alert alert-success alert-dismissible' role='alert'>
          {/* <button
            type='button'
            className='close'   ADD an onClick for the alert
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button> */}
          The total change due is ${this.props.change}
        </div>
      );
    }
    return (
      <div className='alert alert-danger alert-dismissible' role='alert'>
        {/* <button
            type='button'
            className='close'     ADD an onClick for the alert
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button> */}
        Additional money owed.
        </div>
    );
  }
}
