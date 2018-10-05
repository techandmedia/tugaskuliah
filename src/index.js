import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import styled, { createGlobalStyle, css } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.Fragment>
  // {/* <GlobalStyle /> */}
  <BrowserRouter>
    {/* <GlobalStyle> */}
      <App />
    {/* </GlobalStyle> */}
  </BrowserRouter>,
  // <App />
  // <p>Tes</p>
  // <GlobalStyle/>
  // </React.Fragment>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// Styled Components - Untuk mempermudah pembuatan media query berdasarkan ukuran layar//
// https://www.styled-components.com/docs/advanced#media-templates

// Define screen size
// const sizes = {
//   desktop: 992,
//   tablet: 768,
//   phone: 576
// };

// // Iterate through the sizes and create a media template
// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${sizes[label] / 16}em) {
//       ${css(...args)};
//     }
//   `;
//   return acc;
// }, {});

// const GlobalStyle = createGlobalStyle`
//   html, body {
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//       "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     background-color: yellow;
//     ${media.desktop`background: dodgerblue;`}
//     ${media.tablet`background: mediumseagreen;`}
//     ${media.phone`background: palevioletred;`}
//   }

//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
//   }

//   /* @media (max-width: 700px) {
//     body {
//       background-color: palevioletred;
//     }  
//   } */
// `;
