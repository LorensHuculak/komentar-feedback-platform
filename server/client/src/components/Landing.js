import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className='ui text container center aligned'>
        <h1 className='ui  header'>Komentar</h1>
        <h2>Email Feedback Platform.</h2>
        <div className='ui huge primary button'>
          Get Started <i className='right arrow icon' />
        </div>
      </div>
    );
  }
}

export default Landing;
