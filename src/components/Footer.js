import React from 'react';
import styled from 'styled-components'
import config from '../config/SiteConfig';

const Footer = () => {
  return(
    <Card>{config.copyright}</Card>
  )
}

export default Footer;

const Card = styled.p`
  /* text-align: center; */
  margin-left: 1em;
  position: absolute;
  bottom: 2%;
`