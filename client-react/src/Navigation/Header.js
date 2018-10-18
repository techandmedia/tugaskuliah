import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Projects from '../Projects/Projects';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Header = () => (
  <Router>
    <div>
      <Ul>
        <Li><Link to="/">Home</Link></Li>
         <Li><Link to="/about">About</Link></Li>
       {/* <Li><Link to="/topics">Topics</Link></Li> */}
        <Li><Link to="/projects">Projects</Link></Li>
      </Ul>

      <hr />

      {/* Add switch so it can have both dynamic and static route,
      check out Tyler McGinnis article */}
      {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route path="/topics" component={Topics} /> */}
        <Route path="/projects" component={Projects} />
      {/* </Switch> */}
    </div>
  </Router>
)
export default Header;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`

const Li = styled.li`
  flex: 1;
  font-size: 14px;
`