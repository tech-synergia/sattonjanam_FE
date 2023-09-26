import { Typography, Form, Input, Button, Alert } from "antd";
import "../scss/ContactForm.scss";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function ContactForm() {
  const { TextArea } = Input;
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });

  const [connectus, setConnectus] = useState({
    lookingFor: "",
    userName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const token = context.token;

  const readValue = (e) => {
    const { name, value } = e.target;
    setConnectus({ ...connectus, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        `https://sattonjanam-be.vercel.app/api/v1/contactus/create`,
        connectus,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      axios
        .post(`https://sattonjanam-be.vercel.app/api/v1/contactus/sendmail`, {
          lookingFor: connectus.lookingFor,
          userName: connectus.userName,
          email: connectus.email,
          phoneNumber: connectus.phoneNumber,
          location: connectus.location
        })

        axios
        .post(
          `https://sattonjanam-be.vercel.app/api/v1/contactus/sendmailuser`,
          { email: connectus.email }
        )

        .then((res) => {
          setAlertData({
            type: "success",
            message: "Message send  successfully!",
            show: true,
          });
        })
        .catch((err) => {
          setAlertData({
            type: "error",
            message: err.response.data.msg,
            show: true,
          });
        });

      navigate("/contact");
    } catch (error) {
      setAlertData({
        type: "error",
        message: error.response.data.msg,
        show: true,
      });
    }
  };

  return (
    <div className="contactForm">
      <div className="leftSideAddress">
        <div className="addressContent">
          <Title level={3}>For Matrimonial / Matchmaking Requirements:</Title>
          <Text className="text">
            <i className="bi bi-telephone-fill"></i> 9773643677
          </Text>
          <br />
          <Text className="text">
            <i className="bi bi-envelope-fill"></i> info@sattonjanam.com
          </Text>
        </div>
        <hr />
        {/* <div className="addressContent">
          <Title level={3}>Our Address</Title>
          <Text>
            Add- 224, Ground floor, IP colony Faridabad, Haryana. Pin- 121009
          </Text>
        </div> */}
      </div>
      <div className="rightForm">
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
        <Form className="form">
          <Form.Item htmlFor="userName">
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="Your Name"
              className="input"
              onChange={readValue}
            />
          </Form.Item>
          <Form.Item htmlFor="phoneNumber" className="name">
            <Input
              type="number"
              name="phoneNumber"
              id="phone"
              placeholder="Phone"
              className="input"
              onChange={readValue}
            />
          </Form.Item>
          <Form.Item htmlFor="email">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Id"
              className="input"
              onChange={readValue}
            />
          </Form.Item>
          <Form.Item htmlFor="lookingFor" className="name">
            <Input
              type="text"
              name="lookingFor"
              id="location"
              placeholder="Seeking Alliance For"
              className="input"
              onChange={readValue}
            />
          </Form.Item>
          <Form.Item htmlFor="location" className="name">
            <Input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              onChange={readValue}
            />
          </Form.Item>

          <Button className="btn" onClick={submitHandler}>
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
