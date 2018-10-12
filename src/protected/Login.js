import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/shared/Button';
import UserLogin from './UserLogin';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <Button
          logout
          onClick={() => {
            fakeAuth.signout(() => history.push('/'));
          }}
        >
          Log out
        </Button>
      </p>
    ) : (
      <Welcome>
        <p>Welcome Guest</p>
        <p>Please Login to your Account</p>
      </Welcome>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <View>Anda harus log in untuk melihat halaman ({from.pathname})</View>
        <UserLogin />
        <Card>
          <Button logout onClick={this.login}>
            Log in
          </Button>
        </Card>
      </div>
    );
  }
}

export { AuthButton, Login, PrivateRoute };

const Welcome = styled.div`
  text-align: right;
  margin-right: 30px;
  line-height: 0.3rem;
`;

const Card = styled.div`
margin-top: 1em;
text-align: center;

  /* display: flex; */
`;

const View = styled.p`
  text-align: center;
  margin: 2em 0 0.5em 0;
  font-size: 18px;
  font-weight: bold;
`
