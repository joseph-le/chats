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
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'username' ? target.username : target.password;
    const name = target.name;
    this.setState(
      {
        [name]: value
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
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
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