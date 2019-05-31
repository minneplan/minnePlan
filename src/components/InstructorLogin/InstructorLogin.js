import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  clientID: 'V54yGoqSS6zr4Gi38q4xh1Fw1kZhNQvQ',
  domain: 'dev-o06mn1qr.auth0.com',
  redirectUri: 'http://localhost:5000/api/instructor/login/callback',
  responseType: 'token id_token',
  scope: 'openid email',
});

class InstructorLogin extends Component {
  state = {
    email: '',
    code: '',
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendEmail = () => {
    const { email } = this.state;

    webAuth.passwordlessStart({
      connection: 'email',
      send: 'code',
      email,
    }, (err) => {
      if (err) {
        // eslint-disable-next-line no-alert
        alert(`error sending email: ${err.error_description}`);
      }
    });
  }

  verifyCode = () => {
    const { email, code } = this.state;
    webAuth.passwordlessLogin({
      connection: 'email',
      email,
      verificationCode: code,
    }, (err) => {
      // handle errors
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <input
          name="email"
          placeholder="email"
          onChange={this.onChange}
          value={this.state.email}
        />
        <button
          type="button"
          onClick={this.sendEmail}
        >
          SendEmail
        </button>

        <br />

        <input
          name="code"
          placeholder="code"
          onChange={this.onChange}
          value={this.state.code}
        />
        <button
          type="button"
          onClick={this.verifyCode}
        >
          VerifyCode
        </button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(InstructorLogin));
