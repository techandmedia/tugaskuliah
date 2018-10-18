import React, { Component } from 'react';
import { Tabs } from 'antd';
import FormUser from './Data/FormUser';
import FormProduct from './Data/FormProduct';
import EmployeeList from './Data/EmployeeList';
import Inventory from './Data/Inventory';
import ProductHistory from './Data/ProductHistory-v2';
import Button from './components/button'
// import Win7 from './Filter/Windows7';
// import Win8 from './Filter/Win810Pro';
// import Win8SL from './Filter/Win810SL';
// import Macbook from './Filter/Macbook';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="4" type="card">
        <TabPane tab="Form User" key="1">
          <FormUser />
        </TabPane>
        <TabPane tab="Form Product" key="2">
          <FormProduct />
        </TabPane>
        <TabPane tab="Inventory" key="3">
          <Inventory />
        </TabPane>
        <TabPane tab="Employee List" key="4">
          <EmployeeList />
        </TabPane>
        <TabPane tab="History" key="5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Product History" key="1">
              <ProductHistory />
            </TabPane>
            {/* <TabPane tab="Windows 7" key="2">
              <Win7 />
            </TabPane> */}
            {/* <TabPane tab="Windows 8 / 10 Pro" key="3">
              <Win8 />
            </TabPane>
            <TabPane tab="Windows 8 / 10 SL" key="4">
              <Win8SL />
            </TabPane>
            <TabPane tab="Macbook" key="5">
              <Macbook />
            </TabPane> */}
          </Tabs>
        </TabPane>
        <TabPane tab="Untuk Tes" key="6">
          <Button label={'Button'}/>
          {/* <Button label={'Ini Button Kepajangan Lebih Panjang lagi'}/> */}
        </TabPane>
      </Tabs>
    )
  }
}
