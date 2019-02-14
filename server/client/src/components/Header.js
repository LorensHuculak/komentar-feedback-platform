import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <a href='/auth/google' className='ui google plus button'>
            <i className='google  icon' />
            Sign In
          </a>
        );
      default:
        return (
          <a href='/api/logout' className='ui  button'>
            Sign Out
          </a>
        );
    }
  }
  render() {
    return (
      <div className='ui large  fixed menu'>
        <div className='ui container'>
          <a href='#' className='header item'>
            <img className='logo' src='assets/images/logo.png' />
            Project Name
          </a>

          <a className='active item'>Surveys</a>
          <a className='item'>Add Survey</a>

          <div className='right menu'>
            <div className='item'>
              <a className='ui button'>Log in</a>
            </div>
            <div className='item'>{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
