import React from 'react';
import Tabs from './Tabs';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class Mainlayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }} >
            <Menu.Item key="1">Kemitraan</Menu.Item>
            {/* <Menu.Item key="2">Kemitraan</Menu.Item>
            <Menu.Item key="3">Kemitraan</Menu.Item> */}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Tabs />
            </Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <h4>2018 for Kemitraan by Eko Andri Subarnanto</h4>
          CSS Framework: Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}
