import React from 'react';
import Loadable from 'react-loadable';
import { createGlobalStyle, css } from 'styled-components';

import Loading from './components/Loading';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// React Loadable
// https://github.com/jamiebuilds/react-loadable

const LoadableHome = Loadable({
  loader: () => import('./public/Homepage'),
  loading: Loading,
});

const LoadablePublic = Loadable({
  loader: () => import('./public/Public'),
  loading: Loading
});

const LoadableProtected = Loadable({
  loader: () => import('./protected/Protected'),
  loading: Loading
});

const LoadableAuthButton = Loadable({
  loader: () => import('./protected/Login'),
  render(loaded, props) {
    let AuthButton = loaded.AuthButton;
    return <AuthButton {...props}/>;
  },
  loading: Loading
});

const LoadableLogin = Loadable({
  loader: () => import('./protected/Login'),
  render(loaded, props) {
    let Login = loaded.Login;
    return <Login {...props}/>;
  },
  loading: Loading
});

const LoadablePrivateRoute = Loadable({
  loader: () => import('./protected/Login'),
  render(loaded, props) {
    let PrivateRoute = loaded.PrivateRoute;
    return <PrivateRoute {...props}/>;
  },
  loading: Loading
});

const LoadableHeader = Loadable({
  loader: () => import('./components/Header'),
  loading: Loading
});

const LoadableFooter = Loadable({
  loader: () => import('./components/Footer'),
  loading: Loading
});

/////  React Router v4 /////
// https://reacttraining.com/react-router/web/example/auth-workflow
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const App = () => (
  <Router>
    <React.Fragment>
      <GlobalStyle />

      <LoadableHeader />

      <LoadableAuthButton />

      <Route exact path="/" component={LoadableHome} />
      <Route path="/public" component={LoadablePublic} />
      <Route path="/login" component={LoadableLogin} />
      <LoadablePrivateRoute path="/protected" component={LoadableProtected} />

      <LoadableFooter />
    </React.Fragment>
  </Router>
);

export default App;

// Styled Components - Untuk mempermudah pembuatan media query berdasarkan ukuran layar//
// https://www.styled-components.com/docs/advanced#media-templates

// Define screen size - Tentukan ukuran layar
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: yellow;
    font-size: 14px;
    ${media.desktop`background: dodgerblue;`}
    ${media.tablet`background: mediumseagreen;`}
    ${media.phone`background: palevioletred;`}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  /* @media (max-width: 700px) {
    body {
      background-color: palevioletred;
    }  
  } */
`;
