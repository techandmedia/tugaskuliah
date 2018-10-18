import React from 'react';
import axios from 'axios';
import { Table } from 'antd';
import './product.css';
import { Button } from 'antd/lib/radio';

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
    // axios.get('http://localhost:5000/product-history-v2').then(res => {
    axios.get('https://app.subarnanto.com/api/product_history').then(res => {
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
        title: 'No',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'fullname',
        key: 'fullname',
        // filters: [
        //   { text: 'Desktop', value: 'Desktop' },
        //   { text: 'Laptop', value: 'Laptop' },
        //   { text: 'Not Available', value: 'Not Available' }
        // ],
        // filteredValue: filteredInfo.computertype || null,
        // onFilter: (value, record) => record.computertype.includes(value),
        // sorter: (a, b) => a.fullname.length - b.fullname.length,
        // sortOrder: sortedInfo.columnKey === 'fullname' && sortedInfo.order
      },
      {
        title: 'User Group',
        dataIndex: 'usergroup',
        key: 'usergroup',
      },
      {
        title: 'Domain',
        dataIndex: 'domain',
        key: 'domain',
        filters: [
          { text: '1', value: '1' },
          { text: 'Not Available', value: 'Not Available' }
        ],
        filteredValue: filteredInfo.domain || null,
        onFilter: (value, record) => record.domain.includes(value)
      },
      {
        title: 'Domain Name',
        dataIndex: 'domname',
        key: 'domname',
      },
      {
        title: 'Computer',
        dataIndex: 'computertype',
        key: 'computertype',
        filters: [
          { text: 'Desktop', value: 'Desktop' },
          { text: 'Laptop', value: 'Laptop' },
          { text: 'Not Available', value: 'Not Available' }
        ],
        filteredValue: filteredInfo.computertype || null,
        onFilter: (value, record) => record.computertype.includes(value)
        // sorter: (a, b) => a.computertype.length - b.computertype.length,
        // sortOrder: sortedInfo.columnKey === 'computertype' && sortedInfo.order
      },
      {
        title: 'Operating System',
        dataIndex: 'os',
        key: 'os',
        filters: [
          { text: 'Windows 7 Pro', value: 'Windows 7 Pro' },
          { text: 'Windows 8/10 Pro', value: 'Windows 8/10 Pro' },
          { text: 'Windows 8/10 SL', value: 'Windows 8/10 SL' },
          { text: 'Mac OS', value: 'Mac OS' },
          { text: 'Not Available', value: 'Not Available' }
        ],
        filteredValue: filteredInfo.os || null,
        onFilter: (value, record) => record.os.includes(value)
        // sorter: (a, b) => a.os.length - b.os.length,
        // sortOrder: sortedInfo.columnKey === 'os' && sortedInfo.order
      },
      {
        title: 'Microsoft Office',
        dataIndex: 'off',
        key: 'off',
        filters: [
          { text: 'Office 2010', value: 'Office 2010' },
          { text: 'Office 2013', value: 'Office 2013' },
          { text: 'Office 2016', value: 'Office 2016' },
          { text: 'Not Available', value: 'Not Available' }
        ],
        filteredValue: filteredInfo.off || null,
        onFilter: (value, record) => record.off.includes(value)
      },
      {
        title: 'Antivirus',
        dataIndex: 'av',
        key: 'av',
        filters: [
          { text: 'Installed', value: 'Installed' },
          { text: 'Not Available', value: 'Not Available' }
        ],
        filteredValue: filteredInfo.av || null,
        onFilter: (value, record) => record.av.includes(value)
      },
      {
        title: 'VPN',
        dataIndex: 'vpn',
        key: 'vpn',
        filters: [
          { text: 'Installed', value: 'Installed' },
          { text: 'Not Available', value: 'Not Available' }
        ],
        filteredValue: filteredInfo.vpn || null,
        onFilter: (value, record) => record.vpn.includes(value)
      }
    ];

    return (
      <div>
        <div className="table-operations">
          {/* <Button onClick={this.setGroupSort}>Sort Group</Button> */}
          <Button onClick={this.clearFilters}>Reset Filters</Button>
          {/* <Button onClick={this.clearAll}>Clear filters and sorters</Button> */}
        </div>
        <Table columns={columns} rowKey={this.state.id} dataSource={this.state.users} onChange={this.handleChange} />
      </div>
    )
  }
}

