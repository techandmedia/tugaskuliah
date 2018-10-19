import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Card, Col, Row } from 'reactstrap';

class AuthPage extends React.Component {
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
      // if (res.data.code == 200) {
      //   this.props.history.push('/');
      // }
    } else {
      this.props.history.push('/signup');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  handleLogin = () => {
    this.props.history.push('/');
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
            // return this.props.history.push('/');
            return <Redirect to="/" />
          })
        console.log("Login");
        return this.props.history.push('/');
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

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              onFormSubmit={this.handleSubmit}
              authState={this.props.authState}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
