import React from 'react';
import axios from 'axios';
import { Table } from 'antd';
import './product.css';
import { Button } from 'antd/lib/radio';

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
  title: 'Windows 8 Pro',
  dataIndex: 'win8pro',
  key: 'win8pro',
}, {
  title: 'Windows 8 SL',
  dataIndex: 'win8sl',
  key: 'win8sl',
}, {
  title: 'Office 2010',
  dataIndex: 'off10',
  key: 'off10',
}, {
  title: 'Office 2013',
  dataIndex: 'off13',
  key: 'off13',
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

export default class ProductHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      filteredInfo: null,
      sortedInfo: null
      
    };
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter)
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  }
  setGroupSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'usergroup'
      },
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/product-history').then(res => {
      // axios.get('https://app.subarnanto.com/api/users').then(res => {
      this.setState({ users: res.data });
      // console.log({ users: res.data });
    });
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'fullname',
        key: 'fullname',
        filters: [
          { text: 'Tes', value: 'tes' }
        ],
        filteredValue: filteredInfo.fullname || null,
        onFilter: (value, record) => record.fullname.includes(value),
        sorter: (a, b) => a.fullname.length - b.fullname.length,
        sortOrder: sortedInfo.columnKey === 'fullname' && sortedInfo.order
      },
      {
        title: 'Windows 7 Pro',
        dataIndex: 'win7pro',
        key: 'win7pro',
        filters: [
          { text: 'Windows 7 Pro', value: '1' }
        ],
        filteredValue: filteredInfo.win7pro || null,
        onFilter: (value, record) => record.win7pro.includes(value),
        sorter: (a, b) => a.win7pro.length - b.win7pro.length,
        sortOrder: sortedInfo.columnKey === 'win7pro' && sortedInfo.order
      }
    ];

    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setGroupSort}>Sort Group</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} rowKey="tagid" dataSource={this.state.users}  onChange={this.handleChange}/>
      </div>
    )
  }
}

