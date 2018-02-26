import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        username: event.target.username,
        password: event.target.password
      });
  }

  handleSubmit(event) {
    alert('A username and password were submitted: ' + this.state.username + ' pass: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="LoginPage-header">
          <h1 className="LoginPage-title">Welcome to Joe's Chat Place</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p className="LoginPage-intro">
          Login or Register
        </p>
      </div>
    );
  }
}

export default LoginPage;