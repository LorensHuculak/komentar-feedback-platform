import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
        return [
          <div key='1' className='item'>
            <Payments />
          </div>,
          <div key='2' className='item'>
            <a href='/api/logout' className='ui  button'>
              Sign Out
            </a>
          </div>
        ];
    }
  }
  render() {
    return (
      <div className='ui large  fixed menu'>
        <div className='ui container'>
          <Link to={this.props.auth ? '/surveys' : '/'} className='header item'>
            <img className='logo' src='assets/images/logo.png' alt='' />
            Komentar
          </Link>

          <div className='right menu'>{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
