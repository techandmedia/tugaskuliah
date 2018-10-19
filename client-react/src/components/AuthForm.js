import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class AuthForm extends React.Component {
  state = {
    first_name: null,
    last_name: null,
    role: null,
    email: null,
    password: null
  }

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();
    this.props.onChangeAuthState(authState);
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    // console.log(this.state.email);
    // console.log(this.state.password);
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.isLogin) {
      if (this.state.email == null) {
        console.log("Can't be empty")
      } else {
        axios.post('api/users/login',
          {
            email: this.state.email,
            password: this.state.password
          })
          .then(res => {
            this.setState({ code: res.data.code })
            console.log("res", res);
            console.log("data", res.data);
            console.log("status", this.state.code);
          })
        console.log("Login");
      }
    } else {
      axios.post('api/users/new',
        {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          role: this.state.role,
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          console.log("res", res);
          console.log("data", res.data);
          console.log("status", res.data.status);
        })
      // console.log("Sign Up");
    }
    // function success() {
    //   this.props.history.push('/');
    // }
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      firstnameLabel,
      firstnameInputProps,
      lastnameLabel,
      lastnameInputProps,
      roleLabel,
      roleInputProps,
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      // confirmPasswordLabel,
      // confirmPasswordInputProps,
      children,
      onLogoClick,
      onFormSubmit
    } = this.props;

    return (
      <Form onSubmit={onFormSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        {this.isSignup && (<FormGroup>
          <Label for={firstnameLabel}>{firstnameLabel}</Label>
          <Input id="first" onChange={this.handleChange} {...firstnameInputProps} />
        </FormGroup>)}
        {this.isSignup && (<FormGroup>
          <Label for={lastnameLabel}>{lastnameLabel}</Label>
          <Input id="last" onChange={this.handleChange} {...lastnameInputProps} />
        </FormGroup>)}
        {this.isSignup && (<FormGroup>
          <Label for={roleLabel}>{roleLabel}</Label>
          <Input id="role" onChange={this.handleChange} {...roleInputProps} />
        </FormGroup>)}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input id="email" onChange={this.handleChange} {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input id="password" onChange={this.handleChange} {...passwordInputProps} />
        </FormGroup>
        {/* {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
        )} */}
        {/* <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup> */}
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
                <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                  Signup
              </a>
              )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  firstnameLabel: PropTypes.string,
  firstnameInputProps: PropTypes.object,
  lastnameLabel: PropTypes.string,
  lasttnameInputProps: PropTypes.object,
  roleLabel: PropTypes.string,
  roleInputProps: PropTypes.object,
  emailLabel: PropTypes.string,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
  onFormSubmit: PropTypes.func
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  firstnameLabel: 'First Name',
  firstnameInputProps: {
    type: 'first',
    placeholder: 'first name',
  },
  lastnameLabel: 'Last Name',
  lastnameInputProps: {
    type: 'last',
    placeholder: 'last name',
  },
  roleLabel: 'Role',
  roleInputProps: {
    type: 'role',
    placeholder: 'role',
  },
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => { },
  onFormSubmit: () => { }
};

export default AuthForm;
