import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import("./Projects/Kemitraan/Home"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("./Projects/Kemitraan/About"),
  loading: Loading
});

const FormProduct = Loadable({
  loader: () => import("./Projects/Kemitraan/form/FormProduct"),
  loading: Loading
})

const FormUser = Loadable({
  loader: () => import("./Projects/Kemitraan/form/FormUser"),
  loading: Loading
})

const DataEmployee = Loadable({
  loader: () => import("./Projects/Kemitraan/table/TableListEmployee"),
  loading: Loading
})

const DataProduct = Loadable({
  loader: () => import("./Projects/Kemitraan/table/TableListInventory"),
  loading: Loading
})

const EditDataProduct = Loadable({
  loader: () => import("./Projects/Kemitraan/table/List-Product"),
  loading: Loading
})

const HistoryProduct = Loadable({
  loader: () => import("./Projects/Kemitraan/table/ProductHistory-v2"),
  loading: Loading
})

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form-product" component={FormProduct} />
        <Route path="/form-user" component={FormUser} />
        <Route path="/list-user" component={DataEmployee} />
        <Route path="/list-product" component={DataProduct} />
        <Route path="/edit-product" component={EditDataProduct} />
        <Route path="/history-product" component={HistoryProduct} />
      </Switch>
    </div>
  </Router>
);

export default App;
