import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => (
  <div style={styles}>
    <Header />
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/section1" component={SectionOne} />
      </div>
    </BrowserRouter>
  </div>
);

const Navigations = () => (
  <div style={{ backgroundColor: "lightgrey" }}>
    <h3>I want this div disappear when link is clicked.</h3>
    <Link to="/section1">Render SectionOne</Link>
  </div>
);

const Home = () => <Navigations />;

const SectionOne = () => (
  <div>
    <h4>SectionOne rendered!</h4>
    <Link to="/">Go Back</Link>
  </div>
);

const Header = () => <h1>Header should remain</h1>;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(<App />, document.getElementById("root"));
