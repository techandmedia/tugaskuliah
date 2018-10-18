import React from 'react';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
// import Projects from '../Projects/Projects';
// import styled from 'styled-components';

const Home = () => (
  <div>
    <h2>Tes H2</h2>
    <Link to="/projects">Web Projects</Link>
    {/* <BrowserRouter>
      <div>
        <Route path="/projects" component={Projects} />

      </div>
    </BrowserRouter> */}
  </div>
)

// const Projects = () => (
//   <div><Link to="/projects">Web Projects</Link></div>
  
// )


export default Home;

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: space-around
//   list-style-type: none;
// `

// const Li = styled.li`
//   font-size: 14px;
// `