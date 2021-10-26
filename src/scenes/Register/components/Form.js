import React, { useState, useEffect } from 'react';
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'

const SignUpForm = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
          
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <a href="../..">Đăng nhập</a>
          </Form.Item>

        </Form.Item>  
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
    );
  };


  export default SignUpForm;