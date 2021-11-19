import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  FacebookFilled,
  GoogleCircleFilled,
  GithubFilled,
} from "@ant-design/icons";
import "./Form.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../services/auth";

const SignUpForm = () => {

  const onFinish = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password);
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
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
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
          prefix={<LockOutlined />}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập lại mật khẩu!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Xác nhận mật khẩu"
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary" className="login-form-button">
          ĐĂNG KÝ
        </Button>
      </Form.Item>

      <div style={{ width: "100%", marginBottom: "20px" }} align="center">
        <GoogleCircleFilled className="icons" />
        <FacebookFilled className="icons" />
        <GithubFilled className="icons" />
      </div>

      <Link
        to="/Login"
        style={{
          color: "var(--logo-color)",
          fontSize: "20px",
        }}
      >
        Đăng nhập
      </Link>
    </Form>
  );
};

export default SignUpForm;
