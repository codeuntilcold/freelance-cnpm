import React from "react";
import { Link } from 'react-router-dom';
import { Form, Input, Button} from "antd";
import { MailOutlined, LockOutlined, FacebookFilled, GoogleCircleFilled, GithubFilled } from "@ant-design/icons";
import "./Form.css";

const LoginForm = () => {
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
          ĐĂNG NHẬP
        </Button>
      </Form.Item>

      <div style={{ width: "100%", marginBottom: "20px"}} align="center">
        <GoogleCircleFilled className="icons"/>
        <FacebookFilled className="icons"/>
        <GithubFilled className="icons"/>
      </div>

      <Form.Item>
        <Link to="/" className="login-form-forgot" style={{
          color: "black",
          fontSize: "20px"
        }}>Quên mật khẩu?</Link>
        <Link to="/Register" style={{
          color: "var(--logo-color)",
          fontSize: "20px"
        }}>Đăng kí</Link>
      </Form.Item>

    </Form>
  );
};

export default LoginForm;