// import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `} 
  ${props =>
    props.secondary &&
    css`
      background: red;
      color: white;
    `};
  ${props =>
    props.login &&
    css`
      background: red;
      color: green;
      border: 2px solid grey;
    `};
  ${props =>
    props.logout &&
    css`
      background: white;
      color: black;
      border: 2px solid black;
    `};
`;

export default Button;

// render(
//   <div>
//     <Button>Normal Button</Button>
//     <Button primary>Primary Button</Button>
//   </div>
// );
