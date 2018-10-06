import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

// React Loadable
// https://github.com/jamiebuilds/react-loadable

const Academic = Loadable({
  loader: () => import('../public/Akademik'),
  loading: Loading
});

const AuthButton = Loadable({
  loader: () => import('../protected/Login'),
  render(loaded, props) {
    let AuthButton = loaded.AuthButton;
    return <AuthButton {...props} />;
  },
  loading: Loading
});

const Footer = Loadable({
  loader: () => import('../components/Footer'),
  loading: Loading
});

const Home = Loadable({
  loader: () => import('../public/Homepage'),
  loading: Loading
});

const Header = Loadable({
  loader: () => import('../components/Header'),
  loading: Loading
});

const Login = Loadable({
  loader: () => import('../protected/Login'),
  render(loaded, props) {
    let Login = loaded.Login;
    return <Login {...props} />;
  },
  loading: Loading
});

const PrivateRoute = Loadable({
  loader: () => import('../protected/Login'),
  render(loaded, props) {
    let PrivateRoute = loaded.PrivateRoute;
    return <PrivateRoute {...props} />;
  },
  loading: Loading
});

const Protected = Loadable({
  loader: () => import('../protected/Protected'),
  loading: Loading
});

export {
  Academic,
  AuthButton,
  Footer,
  Header,
  Home,
  Login,
  PrivateRoute,
  Protected
};
