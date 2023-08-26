import React, {useState} from "react";
import { Button, Form, Input, Alert, Typography } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const {Title} = Typography;

const LoginPage = () => {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });

  const [user, setUser] = useState({
    email : "",
    password : ""
  })

  const navigate = useNavigate()

  const readValue = (e)=>{
    const { name , value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      console.log('login=', user);
      const response = await axios.post(`https://sattonjanam.onrender.com/api/v1/login`, user)
      .then(res => {
          setAlertData({
            type: "success",
            message: "Login successful!",
            show: true,
          });
          // localStorage.setItem("accessToken", res.data.token)
          navigate(`/`)
          // window.location.href ="/"
        }).catch(err => {
            setAlertData({
              type: "error",
              message: err.response.data.msg,
              show: true,
            });
        })

    } catch (error) {
      setAlertData({
        type: "error",
        message: error.response.data.msg,
        show: true,
      });
    }
  }

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
      {alertData.show && (
        <Alert
          message={alertData.message}
          type={alertData.type}
          showIcon
          closable
          onClose={() => setAlertData({ ...alertData, show: false })}
          style={{ marginTop: "20px" }}
        />
      )}
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
          onChange={readValue}
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
          onChange={readValue}
        />
      </Form.Item>
      <p style={{textAlign: "center"}}>
        Don't Have an Account? <a href="/register">Register</a>
      </p>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
       <Button type="primary" htmlType="submit" onClick={submitHandler}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
