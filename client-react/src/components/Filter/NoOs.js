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
  title: 'Computer ID',
  dataIndex: 'computerid',
  key: 'computerid',
}, {
  title: 'Domain',
  dataIndex: 'domain',
  key: 'domain',
}, {
  title: 'Windows 7 Pro',
  dataIndex: 'win7pro',
  key: 'win7pro',
}, {
  title: 'Windows 8 / 10 Pro',
  dataIndex: 'win810pro',
  key: 'win810pro',
}, {
  title: 'Windows 8 / 10 SL',
  dataIndex: 'win810sl',
  key: 'win810sl',
}, {
  title: 'Office 2013',
  dataIndex: 'off16',
  key: 'off16',
}, {
  title: 'Antivirus',
  dataIndex: 'av',
  key: 'av',
}, {
  title: 'VPN',
  dataIndex: 'vpn',
  key: 'vpn',
}, {
  title: 'Mobile Device',
  dataIndex: 'mobile_device',
  key: 'mobile_device',
}]

export default class NoOs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/product-history/no-os').then(res => {
      // axios.get('https://app.subarnanto.com/api/users').then(res => {
      this.setState({ users: res.data });
      console.log({ users: res.data });
    });
  }

  render() {
    return (
      // const dataSource={this.state.users};
      <Table rowKey="tagid" dataSource={this.state.users} columns={columns} />
    )
  }
}