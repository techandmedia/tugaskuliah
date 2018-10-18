import React from 'react';
import axios from 'axios';
import { List, Card } from 'antd';
// import Button from '../components/button';
// import { CSVLink, CSVDownload } from 'react-csv'; ini untuk export table ke csv
import { CSVLink } from 'react-csv';
// import './card.css';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
    axios.get('/api/employee').then(res => {
    // axios.get('https://app.subarnanto.com/api/employee/ordered').then(res => {
      this.setState({ employee: res.data });
      let dataEmployee = this.state.employee;
      console.log({ dataEmployee });
    });
  }

  render() {
    // dataEmployee di setState 2x; di sini dan di atas, karena beda scope
    let dataEmployee = this.state.employee;
    return (
      <div>
        {/* bisa juga dipanggil dengan data={this.state.employee}, namun lebih pendek
        jika data dibuatkan variable */}
        <CSVLink data={dataEmployee} >Click here to download CSV file</CSVLink>
        <br /><br />
        <List grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          // grid={{ gutter: 8, xxl: 3, md: 4, lg: 4 }}
          dataSource={dataEmployee}
          renderItem={
            staf => (
              <List.Item >
                <Card key={staf.nameid} title={staf.fullname} style={{ background: '#009688', padding: 0, minHeight: 280 }} >
                  <ul >
                    {/* <li key={staf.uid}>Project ID: {staf.id}</li> */}
                    <li key={staf.projid}>Project ID: {staf.stafid}</li>
                    <li key={staf.groupid}>Staf Group: {staf.stafgroup}</li>
                    <li key={staf.mailid}>Email: {staf.emailid}</li>
                    <li key={staf.mobileid}>Mobile: {staf.mobile}</li>
                    <li key={staf.titleid}>Title: {staf.title}</li>
                    <li key={staf.joinid}>Join Date: {staf.created_at}</li>
                  </ul>
                </Card>
              </List.Item>
            )
          }
        />
      </div>
    )
  }
}
