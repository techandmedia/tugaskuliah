import React from 'react';
import styled from 'styled-components';
import img1 from '../img/school-1.jpg';

const Public = () => {
  return (
    <React.Fragment>
      <h3>Public</h3>
      <Image src={img1} alt="tes" />
    </React.Fragment>
  );
};

export default Public;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
