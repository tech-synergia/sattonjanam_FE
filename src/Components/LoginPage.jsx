import React, {useState} from "react";
import { Button, Form, Input, Alert, Typography } from "antd";

const {Title} = Typography;

const LoginPage = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
    return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: 600,
        margin: "20vh auto",
        border: "1px solid lightgrey",
        padding: "20px",
      }}
      initialValues={{ remember: false }}
    >
      <Title level={2} style={{textAlign:"center"}}>Login</Title>
      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          showIcon
          closable
          style={{ marginBottom: "16px" }}
          onClose={() => setSuccessMessage(null)}
        />
      )}
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          closable
          style={{ marginBottom: "16px" }}
          onClose={() => setErrorMessage(null)}
        />
      )}
      <Form.Item
        label="Email Id"
        rules={[
          { required: true, message: "Please input your Email Id!" },
        ]}
        htmlFor="email"
      >
        <Input
          type="email"
          name="email"
          id="email"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          type="password"
          name="password"
          id="password"
        />
      </Form.Item>
      <p style={{textAlign: "center"}}>
        Don't Have an Account? <a href="/register">Register</a>
      </p>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
