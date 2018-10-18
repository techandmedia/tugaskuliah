import React from "react";
import Header from './components/header';

const About = () => (
  <div style={layout}>
    <Header />
    <p>About About About</p>
  </div>
)

export default About;

const layout = {
  display: 'flex',
  flex: 1,
  height: '100vh',
  background: 'linear-gradient(to right, #096dd9 , #1890ff)',
}