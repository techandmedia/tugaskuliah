import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
   // length label
   labelCol: {
    md: { span: 4 },
    lg: { span: 2 },
  },
  // length content
  wrapperCol: {
    md: { span: 16 },
    lg: { span: 8 },
  },
};

export default class FormInventory extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  state = {
    name: '',
    serial: '',
    tag: '',
    price: '',
    equipment_condition: '',
    image: '',
  };

  handleNameChange = event => { this.setState({ name: event.target.value }) }
  handleSerialChange = event => { this.setState({ serial: event.target.value }) }
  handleTagchange = event => { this.setState({ tag: event.target.value }) }
  handlePriceChange = event => { this.setState({ price: event.target.value }) }
  handleEquipmentChange = event => { this.setState({ equipment_condition: event.target.value }) }
  handleTitleChange = event => { this.setState({ title: event.target.value }) }

  handleSubmit = event => {
    event.preventDefault();

    // const userform = {name: this.state.name};
    // const serialForm = {serial: this.state.serial};
    // const tagForm = {tag: this.state.tag};
    // const priceForm = {price: this.state.price};
    // const equipment_conditionForm = {equipment_condition: this.state.equipment_condition};
    // const titleForm = {title: this.state.title};

    // axios.post('http://localhost:5000/inventory',
    axios.post('https://app.subarnanto.com/inventory',
      { name: this.state.name, serial: this.state.serial, tag: this.state.tag, price: this.state.price, equipment_condition: this.state.equipment_condition }, )
      .then(res => {
        // console.log(res);
        // console.log(res.data);
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Item Name">
          <Input type="text" name={this.state.name} onChange={this.handleNameChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Serial Number">
          <Input type="text" name={this.state.serial} onChange={this.handleSerialChange} /> 
        </FormItem>
        <FormItem {...formItemLayout} label="Inventory Tag">
          <Input type="text" name={this.state.tag} onChange={this.handleTagchange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Item Price">
          <Input type="text" name={this.state.price} onChange={this.handlePriceChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Item Condition">
          <Input type="text" name={this.state.equipment_condition} onChange={this.handleEquipmentChange} />
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 2 }}>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
        </FormItem>
      </Form>
    )
  }
}
