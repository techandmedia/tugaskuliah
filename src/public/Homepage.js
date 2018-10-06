import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import siteconfig from '../config/SiteConfig';
import domainURL from '../config/Config';
import img1 from '../img/school-1.jpg';

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="description" content={siteconfig.siteDescription} />
        <title>{siteconfig.siteTitle}</title>
        <link rel="canonical" href={domainURL} />
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
