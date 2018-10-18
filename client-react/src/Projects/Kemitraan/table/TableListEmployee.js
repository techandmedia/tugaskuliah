import React from 'react';
import axios from 'axios';
import { Table } from 'antd';
import Header from '../components/header';
import Title from '../components/title';

export default class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
    // axios.get('https://app.subarnanto.com/api/employee/ordered').then(res => {
    axios.get('/api/employee').then(res => {
      this.setState({ employee: res.data });
      console.log({ employee: res.data });
    });
  }

  render() {

    const columns = [
      { title: 'Name', dataIndex: 'fullname', key: 'fullname', width: 200, fixed: 'left' },
      { title: 'Title', dataIndex: 'title', key: 'title' },
      { title: 'Email', dataIndex: 'email', key: 'email' }];

    return (
      <div>
        <Header />
        <Title />
        <h1 style={{ fontFamily: 'Quicksand', fontSize: '30px' }}>Data User</h1>
        <div style={{ background: 'white' }}>
          <Table
            className="table"
            bordered columns={columns}
            rowKey={this.state.id}
            dataSource={this.state.employee}
            scroll={{ x: 1300 }} />
        </div>
      </div>
    )
  }
}