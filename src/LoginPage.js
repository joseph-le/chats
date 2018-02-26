import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <header className="LoginPage-header">
          <h1 className="LoginPage-title">Welcome to Joe's Chat Place</h1>
        </header>
        <p className="LoginPage-intro">
          Login or Register
        </p>
      </div>
    );
  }
}

export default LoginPage;