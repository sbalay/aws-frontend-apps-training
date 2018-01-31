import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          HERE WE HAVE OUR BEAUTIFUL DASHBOARD
        </p>
        <Link to='/'> This is not beautiful, take me back to the app </Link>
      </div>
    );
  }
}

export default Dashboard;
