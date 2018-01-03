import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {

  login = (e) => {
    e.preventDefault();

    this.props.startLogin();
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" />
          </div>
          <div>
            <button type="button" onClick={this.props.startLogin}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);