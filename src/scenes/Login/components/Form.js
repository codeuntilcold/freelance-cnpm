import React from "react";
import { Form, Input, Button} from "antd";
import {
  MailOutlined,
  LockOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import "./index.css";

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
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
            message: "Vui lòng nhập email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined/>}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Đăng nhập
        </Button>
      </Form.Item>

      
      <Form.Item>

        <a href="../..">Đăng kí</a>
        <a className="login-form-forgot" href="">
          Quên mật khẩu?
        </a>
      </Form.Item>


      <div style={{ width: "100%" }} align="center">
        <FacebookOutlined style={{ fontSize: 50 }} />
        <FacebookOutlined style={{ fontSize: 50 }} />
        <FacebookOutlined style={{ fontSize: 50 }} />
      </div>

    </Form>
  );
};

export default NormalLoginForm;
