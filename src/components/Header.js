import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <NavWrapper>
      <NavLeft>
        <StyledLink to="/">STMIK Swadharma</StyledLink>
      </NavLeft>
      <NavLeft>
        <StyledLink to="/Akademik">Program Akademik</StyledLink>
      </NavLeft>
      <NavLeft>
        <StyledLink to="/">Tentang Swadharma</StyledLink>
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
  );
};

export default Header;

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
