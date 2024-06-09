import React, { useState } from 'react';
import { LockOutlined, MailOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import './login.css'; 
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Apicalls/user";


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await loginUser(values);
      if (response.sucess) {
        localStorage.setItem("token",response.data)
        message.success(response.message);
        navigate("/user");
      }
      else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

 

  return (
    <div className="landing-page">
  
        <div className='boxed'>
   
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1 className='Loginn'>Login</h1>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email ID" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgot-password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
        <Link  to="/register" className="text-primary" >
          {" "}
        <p style={{marginTop:"25px"}}>  Don't have an account? Register</p>
        </Link>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Login;
