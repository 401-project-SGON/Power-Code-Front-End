import React from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookies';
import { login, logout, validateToken, signup } from '../../store/actions.js'

const If = props => {
  return props.condition ? props.children : null;
};


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  componentDidMount() {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    this.props.dispatch(validateToken(token));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(login({ 'username': this.state.username, 'password': this.state.password }))
  };
  handleSubmit_signup = e => {
    e.preventDefault();
    this.props.dispatch(signup({ 'username': this.state.username, 'password': this.state.password }))
  };

  
  render() {
    return (
      <>

        <If condition={!this.props.reducer.loggedIn}>

          <form onSubmit={this.handleSubmit_signup}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>signup</button>
          </form>

        </If>


        <If condition={this.props.reducer.loggedIn}>
          <button onClick={() => this.props.dispatch(logout())}>Log Out</button>

        </If>

        <If condition={!this.props.reducer.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </If>
      </>
    );
  }
}

const mapStateToProps = state => ({
  reducer: state.reducer
});


export default connect(
  mapStateToProps
)(Login);
