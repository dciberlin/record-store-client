import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange(e) {
    debugger;
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });

    // if (name === 'email') this.setState({ email: e.target.value });
    // else if (name === 'password') this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div id="login" className="page thirdColor">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
