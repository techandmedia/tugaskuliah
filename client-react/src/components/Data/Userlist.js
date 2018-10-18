import React from 'react';
import axios from 'axios';
import { List, Card } from 'antd';
// import './card.css';

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/employee').then(res => {
      // axios.get('https://app.subarnanto.com/users').then(res => {
        this.setState({ users: res.data });
        console.log({ users: res.data });
      });
    }

  render() {
        return(
      <List grid = {{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
        // grid={{ gutter: 8, xxl: 3, md: 4, lg: 4 }}
        dataSource = { this.state.users }
        renderItem = {
        user => (
          <List.Item >
            <Card key={user.nameid} title={user.fullname} style={{ background: '#009688', padding: 0, minHeight: 280 }} >
              <ul >
                {/* <li key={user.uid}>Project ID: {user.id}</li> */}
                <li key={user.projid}>Project ID: {user.userid}</li>
                <li key={user.groupid}>User Group: {user.usergroup}</li>
                <li key={user.mailid}>Email: {user.emailid}</li>
                <li key={user.mobileid}>Mobile: {user.mobile}</li>
                <li key={user.titleid}>Title: {user.title}</li>
                <li key={user.joinid}>Join Date: {user.created_at}</li>
              </ul>
            </Card>
          </List.Item>
        )
      }
      />
    )
  }
}
