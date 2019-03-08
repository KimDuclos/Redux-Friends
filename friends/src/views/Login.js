import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // login function that passes in creds
  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/friends");
    });
  };

  // LOGIN FORM
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);