import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header';

const MyLayout = () => (
  <div style={layout}>
    <Header />
  </div>
);

export default MyLayout;

const layout = {
  display: 'flex',
  flex: 1,
  height: '100vh',
  background: 'linear-gradient(to right, #096dd9 , #1890ff)',
}