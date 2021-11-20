import React from "react";
import { Link } from 'react-router-dom';
import { Form, Input, Button} from "antd";
import { MailOutlined, LockOutlined, FacebookFilled, GoogleCircleFilled, GithubFilled } from "@ant-design/icons";
import "./Form.css";
import { signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth";
import auth from "../../../services/auth";

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

const LoginForm = () => {


  const onFinish = (values) => {
    try {
      signInWithEmailAndPassword(auth, values.email, values.password);
    }
    catch {
      alert("Invalid email! Please try again.")
    }
  };
  
  const handleFbLogin = () => {
    signInWithPopup(auth, fbProvider);
  }
  
  const handleGgLogin = async () => {
    const temp = await signInWithPopup(auth, ggProvider);
    console.log({temp});
  }

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
        <GoogleCircleFilled className="icons" onClick={handleGgLogin}/>
        <FacebookFilled className="icons" onClick={handleFbLogin}/>
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
