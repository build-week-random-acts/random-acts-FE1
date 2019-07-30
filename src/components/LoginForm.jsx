import React, { Component } from 'react';
import axios from 'axios';
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    loggingIn: true,
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginHandler = e => {
    e.preventDefault();
    let credentials = `grant_type=password&username=${
      this.state.username
    }&password=${this.state.password}`;
    axios
      .post('https://bfeole-randomacts.herokuapp.com/login', credentials, {
        headers: {
          Authorization: `Basic ${btoa('lambda=secret:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  registerHandler = e => {
    e.preventDefault();
    axios
      .post('https://bfeole-randomacts.herokuapp.com/createnewuser', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/');
      })
      .catch(err => console.log(`error: ${err}`));
  };

  render() {
    return (
      <div className='container'>
        <h1 className='login'>Login to Get Started</h1>
        <form
          onSubmit={
            this.state.loggingIn ? this.loginHandler : this.registerHandler
          }
        >
          <input
            className='input'
            value={this.state.username}
            type='text'
            name='username'
            placeholder='username'
            onChange={this.changeHandler}
          />
          <input
            className='input'
            value={this.state.password}
            type='password'
            name='password'
            placeholder='password'
            onChange={this.changeHandler}
          />
          <button className='btn'>
            {this.state.loggingIn ? 'Login' : 'Register'}
          </button>
        </form>
        <p>
          Not a user? Click{' '}
          <span
            onClick={() => this.setState({ loggingIn: !this.state.loggingIn })}
          >
            here
          </span>
          &nbsp;to register
        </p>
      </div>
    );
  }
}
export default LoginForm;
