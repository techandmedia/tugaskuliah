import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import styled, { createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.Fragment>
    // {/* <GlobalStyle /> */}
    <App />
    // <p>Tes</p>
    // <GlobalStyle/>
  // </React.Fragment>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// const GlobalStyle = createGlobalStyle`
//   html {
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//       "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
//       monospace;
//   }
// `
