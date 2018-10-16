import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

import { Academic,
  Admin,
  AuthButton,
  Dosen,
  Footer,
  Header,
  Home,
  Login,
  Mahasiswa,
  PrivateRoute } from './config/Loadable';

import { BrowserRouter as Router, Route } from 'react-router-dom';


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
      
      <Header />

      <AuthButton />

      <Route exact path="/" component={Home} />
      <Route path="/Akademik" component={Academic} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/mahasiswa" component={Mahasiswa} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/dosen" component={Dosen} />

      <Footer />

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
