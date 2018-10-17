import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import img1 from '../img/school-1.jpg';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="Sekolah Tinggi Manajemen Informatika Swadharma"
          content="Kuliah hemat hebat"
        />
        <title>Akademik STMIK Swadharma</title>
        <link rel="canonical" href="https://tugaskuliah.subarnanto.com/" />
      </Helmet>
      <h3>Tentang Swadharma</h3>
      <Image src={img1} alt="tes" />
    </React.Fragment>
  );
};

export default About;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
