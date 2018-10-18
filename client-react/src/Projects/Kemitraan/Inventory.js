import React from 'react';
import axios from 'axios';
import { List, Card, } from 'antd';
// import { Table, Input, InputNumber, Popconfirm, Form, List, Card, } from 'antd';


export default class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/product/orderedbydate').then(res => {
    // axios.get('https://app.subarnanto.com/api/product/orderedbydate').then(res => {
      // axios.get('https://app.subarnanto.com/api/product/ordered').then(res => {
      this.setState({ inventory: res.data });
      console.log({ inventory: res.data });
    });
  }

  render() {
    return (
      <List grid={{ gutter: 8, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
        // grid={{ gutter: 8, xxl: 3, md: 4, lg: 4 }}
        dataSource={this.state.inventory}
        renderItem={item => (
          <List.Item >
            <Card style={{ background: 'white', padding: 0, minHeight: 280 }}>
              <ul>
                <img key={item.imagekey} src={item.image} alt='gambar' width='auto' height='80' />
                <li key={item.uid}>Product Name: {item.productname}</li>
                <li key={item.catkey}>Category: {item.category}</li>
                <li key={item.modkey}>Model: {item.model}</li>
                <li key={item.oskey}>Operating System: {item.os}</li>
                <li key={item.serialkey}>Serial: {item.serialnumber}</li>
                <li key={item.pricekey}>Price: {(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price))}</li>
                <li key={item.condkey}>Condition: {item.equipment_condition}</li>
                <li key={item.detaillkey}>Detail: {item.detail}</li>
              </ul>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

 // <Row type="flex" justify="start"> <Col span={4} className="card margin-card">
            // {/* <div className="card margin-card"> */}
            //   <div className="card-content">
            //     <div className="media">
            //       <div>
            //         <figure >
            //           <img key={item.imagekey} src={item.image} alt='gambar' width='150' height='auto'/>
            //         </figure>
            //       </div>
            //     </div>
            //     <div>
            //       <h4 key={item.namekey}>Nama:  {item.name} </h4>
            //       <h4 key={item.serialkey}>Nomor Seri:  {item.serial} </h4>
            //       <h4 key={item.tagkey}>ID Tag:  {item.tag} </h4>
            //     </div>
            //   {/* </div> */}
            // </div></Col></Row>
  // render() {
  //   return this.state.inventory.map(item => {
  //     return (
  //       <div key={item.serial}>
  //         <h4>Nama:  {item.name} </h4>
  //         <h4>Nomor Seri:  {item.serial} </h4>
  //         <h4>ID Tag: {item.tag} </h4>
  //         <img src={item.image} alt="tes"/>
  //       </div>
  //     );
  //   })
  // }
  // render() {
  //   return this.state.inventory.map((itemList, key) => {
  //     let item = itemList;
  //     return (
  //       <div key={key}>
  //         <h4>Nama:  { item.name } </h4>
  //         <h4>Nomor Seri:  { item.serial } </h4>
  //         <h4>ID Tag:  { item.tag } </h4>
  //         <img src={ item.image }/>
  //       </div>
  //     );
  //   })
  // }
  // render() {
  //   return this.state.inventory.map(itemList => {
  //       let item = itemList;
  //       return (
  //           <div key={ item.id }>
  //               <h4>Nama:  { item.name } </h4>
  //               <h4>Nomor Seri:  { item.serial } </h4>
  //               <h4>ID Tag:  { item.tag } </h4>
  //               <img src={ item.image } />
  //           </div>
  //       );
  //   })
  // }

