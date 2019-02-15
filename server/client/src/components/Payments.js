import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Komentar'
        description='$5 for 5 Credits'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className='ui yellow button'>
          <i className='plus icon' /> Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;
