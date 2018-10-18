import React from 'react';
import axios from 'axios';
import { Button, Cascader, Form, Input, Modal } from 'antd';

const FormProduct = Form.Item;
// const Option = Select.Option;

const computerType = [{
  value: 'Computer',
  label: 'Computer',
  children: [{
    value: 'Desktop',
    label: 'Desktop',
    children: [
      {
        value: 'All in One PC',
        label: 'All in One PC'
      },
      {
        value: 'PC Desktop',
        label: 'PC Desktop'
      }]
  }, {
    value: 'Laptop',
    label: 'Laptop'
  }]
}, {
  value: 'Alat Jaringan',
  label: 'Alat Jaringan',
}]

const os = [{
  value: 'Microsoft Windows',
  label: 'Microsoft Windows',
  children: [{
    value: 'Windows 7 Pro',
    label: 'Windows 7 Pro'
  }, {
    value: 'Windows 8/10 Pro',
    label: 'Windows 8/10 Pro'
  }, {
    value: 'Windows 8/10 SL',
    label: 'Windows 8/10 SL'
  }],
}, {
  value: 'Unix/Linux',
  label: 'Unix/Linux'
}, {
  value: 'Mac OS',
  label: 'Mac OS'
}]

export default class FormInventory extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  state = {
    category: '',
    productname: '',
    os: '',
    model: '',
    serialnumber: '',
    price: '',
    equipment_condition: '',
    detail: '',
    image: '',
  };

  // function handleCategoryChange(value) {
  //   return this.setState({ category: value })
  // }

  handleCategoryChange = value => {
    let val = value.length - 1 // ambil index yang terakhir, karena index dimulai dari 0, maka kurangi 1
    this.setState({ category: value[val] }) // isi berdasarkan index yang terakhir
    console.log('category ' + value[val])
  }
  handleOsChange = value => {
    let val = value.length - 1
    this.setState({ os: value[val] })
    console.log('os ' + value[val])
  }
  handleProductNameChange = event => { this.setState({ productname: event.target.value }) }
  handleModelchange = event => { this.setState({ model: event.target.value }) }
  handleSerialnumberChange = event => { this.setState({ serialnumber: event.target.value }) }
  handlePriceChange = event => { this.setState({ price: event.target.value }) }
  handleEquipmentChange = event => { this.setState({ equipment_condition: event.target.value }) }
  handleDetailChange = event => { this.setState({ detail: event.target.value }) }
  handleImageChange = event => { this.setState({ image: event.target.value }) }

  // resetFields = this.state.resetFields();
  // handleReset = event => { this.setState({
  //   category: '',
  //   productname: '',
  //   model: '',
  //   serialnumber: '',
  //   price: '',
  //   equipment_condition: '',
  //   detail: '',
  //   image: '',
  // }) }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('https://app.subarnanto.com/api/product/new',
    // axios.post('http://localhost:5000/api/product/new',
      {
        category: this.state.category,
        productname: this.state.productname,
        os: this.state.os,
        serialnumber: this.state.serialnumber,
        model: this.state.model,
        price: this.state.price,
        equipment_condition: this.state.equipment_condition,
        detail: this.state.detail,
        image: this.state.image
      })
      .then(
        // const success => {
        function success() {
          const modal = Modal.success({
            title: 'Success',
            content: 'Data successfully add',
          });
          setTimeout(() => modal.destroy(), 2000);
        }
        // console.log(res);
        // console.log(res.data);
      )
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormProduct style={formStyle} {...formProductLayout} label="Computer Category">
          <Cascader options={computerType} category={this.state.category} onChange={this.handleCategoryChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Operating System">
          {/* <Cascader options={os} /> */}
          <Cascader options={os} os={this.state.os} onChange={this.handleOsChange} />
        </FormProduct>
        <FormProduct style={formStyle}  {...formProductLayout} label="Product Name">
          <Input type="text" productname={this.state.productname} onChange={this.handleProductNameChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Serial Number">
          <Input type="text" serialnumber={this.state.serialnumber} onChange={this.handleSerialnumberChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Model">
          <Input type="text" model={this.state.model} onChange={this.handleModelchange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Item Price">
          <Input type="text" price={this.state.price} onChange={this.handlePriceChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Item Condition">
          <Input type="text" equipment_condition={this.state.equipment_condition} onChange={this.handleEquipmentChange} />
        </FormProduct>
        <FormProduct {...formProductLayout} label="Detail">
          <Input type="text" detail={this.state.detail} onChange={this.handleDetailChange} />
        </FormProduct>
        {/* <FormProduct {...formProductLayout} label="Image">
          <Input type="text" productname="this.state.detail" onChange={this.handleDetailChange} />
        </FormProduct> */}
        <FormProduct style={formStyle} {...buttonLayout}>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
          {/* <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleReset}> */}
          <Button style={{ marginLeft: 20 }} type="primary">
            Clear (not yet working!)
          </Button>
        </FormProduct>

      </Form>
    )
  }
}

const formStyle = {
  margin: 5,
  padding: 0,
  color: 'rgb(250,128,114)'
}

const formProductLayout = {
  // length label
  labelCol: {
    // xs: { span: 4, offset: 0 },
    sm: { span: 8 },
    md: { span: 6 },
    lg: { span: 4 },
    xl: { span: 3 },
  },
  // length content
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 14 },
    md: { span: 10 },
    lg: { span: 8 },
    xl: { span: 6 },
  },
};

const buttonLayout = {
  wrapperCol: {
    // xs: { span: 1 },
    sm: { offset: 8 },
    md: { offset: 6 },
    lg: { offset: 4 },
    xl: { offset: 3 }
  }
}