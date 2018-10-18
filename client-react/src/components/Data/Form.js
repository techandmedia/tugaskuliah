import React from 'react';
import axios from 'axios';
import { Form, Input } from 'antd';
// import { List, Card, Form } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    md: { span: 16 },
    lg: { span: 8 },
  },
  wrapperCol: {
    md: { span: 16 },
    lg: { span: 8 },
  },
};

export default class FormUser extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  state = {
    userid: '',
    fullname: '',
    usergroup: '',
    emailid: '',
    mobile: '',
    title: '',

  };

  handleUserIDChange = event => {this.setState({ userid: event.target.value })}
  handleFullNameChange = event => {this.setState({ fullname: event.target.value })}
  handleUserGroupChange = event => {this.setState({ usergroup: event.target.value })}
  handleEmailIDChange = event => {this.setState({ emailid: event.target.value })}
  handleMobileChange = event => {this.setState({ mobile: event.target.value })}
  handleTitleChange = event => {this.setState({ title: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    // const userform = {userid: this.state.userid};
    // const fullnameForm = {fullname: this.state.fullname};
    // const usergroupForm = {usergroup: this.state.usergroup};
    // const emailidForm = {emailid: this.state.emailid};
    // const mobileForm = {mobile: this.state.mobile};
    // const titleForm = {title: this.state.title};

    axios.post('http://localhost:5000/users',
      { userid: this.state.userid, fullname: this.state.fullname, usergroup: this.state.usergroup, emailid: this.state.emailid, mobile: this.state.mobile, title: this.state.title },)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="User Project ID">
          <Input type="text" name="this.state.userid" onChange={this.handleUserIDChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Full Name">
          <Input type="text" name="this.state.fullname" onChange={this.handleFullNameChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="User Group">
          <Input type="text" name="this.state.usergroup" onChange={this.handleUserGroupChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          <Input type="text" name="this.state.emailid" onChange={this.handleEmailIDChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Mobile">
          <Input type="text" name="this.state.mobile" onChange={this.handleMobileChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Title">
          <Input type="text" name="this.state.title" onChange={this.handleTitleChange} />
        </FormItem>
        <button type="submit">Add</button>
      </Form>
      // <Form onSubmit={this.handleSubmit}>
      //   <FormItem {...formItemLayout}>
      //     <label>User Project ID:  <input type="text" name="this.state.userid" onChange={this.handleUserIDChange} /></label>
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Full Name:  <input type="text" name="this.state.fullname" onChange={this.handleFullNameChange} /></label><br />
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>User Group:  <input type="text" name="this.state.usergroup" onChange={this.handleUserGroupChange} /></label><br />
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Email:  <input type="text" name="this.state.emailid" onChange={this.handleEmailIDChange} /></label>
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Mobile:  <input type="text" name="this.state.mobile" onChange={this.handleMobileChange} /></label>
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Title:  <input type="text" name="this.state.title" onChange={this.handleTitleChange} /></label>
      //   </FormItem>
      //   <button type="submit">Add</button>
      // </Form>
    )
  }
}
