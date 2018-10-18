import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'fullname',
  key: 'fullname',
}, {
  title: 'User Group',
  dataIndex: 'usergroup',
  key: 'usergroup',
}, {
  title: 'Domain',
  dataIndex: 'domain',
  key: 'domain',
}, {
  title: 'Domain Name',
  dataIndex: 'domname',
  key: 'domname',
}, {
  title: 'Microsoft Office',
  dataIndex: 'off',
  key: 'off',
}, {
  title: 'Antivirus',
  dataIndex: 'av',
  key: 'av',
}, {
  title: 'VPN',
  dataIndex: 'vpn',
  key: 'vpn',
}]

export default class Win7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/product-history-v2').then(res => {
    // axios.get('http://localhost:5000/product-history/win7pro').then(res => {
      axios.get('https://app.subarnanto.com/product-history-v2').then(res => {
      this.setState({ users: res.data });
      console.log({ users: res.data });
    });
  }

  render() {
    return (
      // const dataSource={this.state.users};
      <Table rowKey={this.state.id} dataSource={this.state.users} columns={columns} />
    )
  }
}