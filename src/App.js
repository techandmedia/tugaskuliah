import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import Public from './public/Public';
import Protected from './protected/Protected';
import HomePage from './public/Homepage';
import { AuthButton, Login, PrivateRoute} from './protected/Login';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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

      <NavWrapper>
        <NavLeft>
          <StyledLink to="/">Home</StyledLink>
        </NavLeft>

        <NavRight>
          <StyledLink to="/protected">Protected Page</StyledLink>
        </NavRight>
        <NavRight>
          <StyledLink to="/protected">Protected Page</StyledLink>
        </NavRight>
        <NavRight>
          <StyledLink to="/public">Public Page</StyledLink>
        </NavRight>
      </NavWrapper>

      <AuthButton />

      <Route exact path="/" component={HomePage} />
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </React.Fragment>
  </Router>
);

export default App;

// Styled Components - Untuk mempermudah pembuatan media query berdasarkan ukuran layar//
// https://www.styled-components.com/docs/advanced#media-templates

// Define screen size
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

const NavWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* width: 25%; */
  background-color: #333;
  /* height: 100%; Full height */
  /* position: fixed; /* Make it stick, even on scroll */
  overflow: auto; /* Auto for Enable scrolling if the sidenav has too much content */
`;

const NavLeft = styled.li`
  float: left;
  margin-left: 30px;
  /* Entah kenapa desktop ngga bisa */
  /* ${media.desktop`margin-left: 30px;`} */
  ${media.tablet`margin-left: 10px;`}
  ${media.phone`margin-left: 0px;`}
`;

const NavRight = styled.li`
  float: right;
`;

const StyledLink = styled(Link)`
  display: block;
  color: palevioletred;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  :hover {
    background-color: #111;
  }
`;

const Welcome = styled.div`
  text-align: center;
  line-height: 0.3rem;
`;
