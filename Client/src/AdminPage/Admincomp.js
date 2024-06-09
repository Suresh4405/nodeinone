import React from 'react';
import { Tabs } from "antd";
import Contactdetails from './Contactdetails';
import Jobpage from './Jobpage';

const Admincomp = () => {
    return (
        <div style={{marginTop:"90px",marginLeft:"10px"}}>
           <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Contact Us Page" key="1">
            <Contactdetails/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Career Applications" key="2">
            <Jobpage/>
           
        </Tabs.TabPane>
       
      </Tabs>
        </div>
    );
}

export default Admincomp;
