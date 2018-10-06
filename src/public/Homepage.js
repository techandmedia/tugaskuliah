import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import config from '../config/SiteConfig';
import img1 from '../img/school-1.jpg';

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <title>{config.siteTitle}</title>
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>
      <h3>Home</h3>
      <Image src={img1} alt="tes" />
    </React.Fragment>
  );
};

export default HomePage;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
