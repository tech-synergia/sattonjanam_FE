import React, { useContext , useState} from 'react'
import { Form, Input, Radio, Button,  Alert } from "antd";
import '../scss/ConnectWithUs.scss'
import { GlobalContext } from '../GlobalContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function ConnectWithUs() {
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
        query: []
    })

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
  const token = context.token

    const readValue = (e) => {
        const { name, value } = e.target
        setConnectus({ ...connectus, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try{

            axios.post(`https://sattonjanam-be.onrender.com/api/v1/connectus/create`, connectus,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })

            axios.post(`https://sattonjanam-be.onrender.com/api/v1/connectus/sendmail`, {lookingFor: connectus.lookingFor, userName: connectus.userName, email: connectus.email, phoneNumber: connectus.phoneNumber,location: connectus.location, query: connectus.query})

            .then(res => {
                setAlertData({
                  type: "success",
                  message: "Message send  successfully!",
                  show: true,
                });
              }).catch(err => {
                setAlertData({
                  type: "error",
                  message: err.response.data.msg,
                  show: true,
                });
              })

              navigate('/')

        } catch (error) {
            setAlertData({
              type: "error",
              message: error.response.data.msg,
              show: true,
            });
          }
    }
    

  return (
    <div className="connectUs">
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
        <h1>Connect With Us</h1>
        <Form className="formContainer" >
            <Form.Item className="gender" label="Looking For" htmlFor="lookingFor">
                <Radio.Group name="lookingFor" id="lookingFor" onChange={readValue}>
                <Radio value="bride"><strong>Bride</strong></Radio>
                <Radio value="groom"><strong>Groom</strong></Radio>
                </Radio.Group>
            </Form.Item>
            <div className="name-container">
                <Form.Item htmlFor="userName">
                    <Input type="text" name="userName" id="userName" placeholder="Your Name" onChange={readValue}/>
                </Form.Item>
                <Form.Item htmlFor="email">
                    <Input type="email" name="email" id="email" placeholder="Email Id" onChange={readValue}/>
                </Form.Item>
            </div>
            <div className="name-container">
                <Form.Item htmlFor="phoneNumber" className="name">
                    <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone" onChange={readValue}/>
                </Form.Item>
                <Form.Item htmlFor="location" className="name">
                    <Input type="text" name="location" id="location" placeholder="Location" onChange={readValue}/>
                </Form.Item>
            </div>
            <Form.Item
                    htmlFor="query"
                    placeholder="Query"
                >
                    <TextArea
                    name="query"
                    id="query"
                    placeholder="Query"
                    rows={3}
                    cols={10}
                    onChange={readValue}
                    />
                </Form.Item>
            <Button className="btn" onClick={submitHandler}>Send Query</Button>
        </Form>

        <div className="contactAddress">
            <div className="address">
                <p>Add- 224, Ground floor, IP colony Faridabad, Haryana. Pin- 121009</p>
            </div>
            <div className="address">
                <p>9773643677</p>
              
            </div>
            <div className="address">
                <p>support@sattonjanam.com</p>
            </div>
        </div>
    </div>
  )
}

export default ConnectWithUs
