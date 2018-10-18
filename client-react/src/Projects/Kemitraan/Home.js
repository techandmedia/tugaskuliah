import React from 'react';
import { Button } from 'antd';
import { withRouter } from "react-router-dom";
import Header from './components/header'
import './layout.css';

const FormProductButton = withRouter(({ history }) => (
  <Button className="form" size="large" onClick={() => { history.push('/form-product') }}>
    Form Produk
  </Button>
))

const FormUserButton = withRouter(({ history }) => (
  <Button className="form" size="large" onClick={() => { history.push('/form-user') }}>
    Form User
  </Button>
))

const EditProductButton = withRouter(({ history }) => (
  <Button className="form" size="large" onClick={() => { history.push('/edit-product') }}>
    Edit Data Produk
  </Button>
))

const ListUserButton = withRouter(({ history }) => (
  <Button className="data" size="large" onClick={() => { history.push('/list-user') }}>
    Data User
  </Button>
))

const ListProductButton = withRouter(({ history }) => (
  <Button className="data" size="large" onClick={() => { history.push('/list-product') }}>
    Data Produk
  </Button>
))

const HistoryProductButton = withRouter(({ history }) => (
  <Button className="data" size="large" onClick={() => { history.push('/history-product') }}>
    History Produk
  </Button>
))

const Home = () => (
  <div>
    <div style={layout}>
      <div style={divLeft}>
        <h1 style={{ color: 'white', fontFamily: 'Quicksand' }}>KEMITRAAN</h1>
        <h2 className="mis">Management</h2>
        <h2 className="mis1">Inventory</h2>
        <h2 className="mis2">System</h2>
      </div>
      <div style={divRight}>
        <Header />
      </div>
      <div className="phone">
        <div style={{ borderRadius: '3px', paddingTop: '15%' }}>
          <FormUserButton />
          <FormProductButton />
          <EditProductButton />
        </div>
        <div style={{ backgroundColor: '#096dd9', borderRadius: '15px', paddingTop: '15%' }}>
          <ListUserButton />
          <ListProductButton />
          <HistoryProductButton />
        </div>
      </div>
      <div className="garisTitik"></div>
      <div className="garisTitik1"></div>
      <div className="garisTitik2"></div>
      <div className="garisTitik3"></div>
      <div className="garisTitik4"></div>
    </div>
  </div>
)

export default Home;

const layout = {
  display: 'flex',
  flex: 1,
  height: '100vh',
  fontSize: '22px',
  color: 'white',
}

const divLeft = {
  width: '50%',
  background: 'linear-gradient(to right, #096dd9 , #1890ff)',
  // backgroundColor: "#4174D1",
  padding: '10px',
  textAlign: 'right',
}

const divRight = {
  width: '50%',
  background: 'linear-gradient(to left, #40a9ff , #bae7ff)',
  // backgroundColor: "#9AB3FA",
  padding: '10px',
}