import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='ui secondary menu'>
      <div className='item'>
        <h2>Dashboard</h2>
      </div>
      <div className='right menu'>
        <div className='item'>
          <Link to='/surveys/new' className='ui button yellow'>
            <i className='ui plus icon' />
            Survey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
