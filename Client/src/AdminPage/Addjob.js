import React from 'react';
import { Col, Form, Modal, Row, Button, message, Input, Select } from "antd";
import { Addjobs, UpdatejobsList } from "../Pages/Apicalls/Jobs";
import moment from "moment";

const { TextArea } = Input;
const { Option } = Select;

const Addjob = ({
    showjobform,
    setShowjobform,
    selectedjob,
    setSelectedjob,
    formType,
    getData
}) => {

    const onFinish = async (values) => {
        try {
          let response = null;
    
          if (formType === "add") {
            response = await Addjobs(values);
          } else {
            response = await UpdatejobsList({
              ...values,
              jobsId: selectedjob._id,
            });
          }
    
          if (response.success) {
            getData();
            message.success(response.message);
            setShowjobform(false);
          } else {
            message.error(response.message);
          }
        } catch (error) {
          message.error(error.message);
        }
      };
    
      
      if (selectedjob) {
        selectedjob.Posted = moment(selectedjob.Posted).format(
          "YYYY-MM-DD"
        );
      }
    return (

             <Modal
      title={formType === "add" ? "ADD Jobs" : "EDIT MOVIE"}
      open={showjobform}
      onCancel={() => {
        setShowjobform(false);
        setSelectedjob(null);
      }}
      footer={null}
      width={800}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedjob}>
        <Row gutter={10}>
          <Col span={24}>
            <Form.Item label="Job Title" name="jobtitle" rules={[{ required: true, message: 'Please input the movie name!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Roles And Responsiblity" name="Roles">
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Skills" name="Skills">
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Education" name="Education">
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Experience" name="Experience">
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Location" name="Location">
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Salary" name="Salary">
              <TextArea />
            </Form.Item>
          </Col>
      

          <Col span={8}>
            <Form.Item label="Posted Date" name="Posted">
              <Input type="date" />
            </Form.Item>
          </Col>
        </Row>

        <div className="todo">
          <Button
            type="primary"
            onClick={() => {
              setShowjobform(false);
              setSelectedjob(null);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" style={{marginLeft:"10px"}}>
            Save
          </Button>
        </div>
      </Form>
    </Modal>
        
    );
}

export default Addjob;
