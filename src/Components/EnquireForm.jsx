import React, { useContext } from 'react'
import { Form, Input, Button , Modal, Alert} from 'antd'
import '../scss/EnquireForm.scss'
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons'
import { GlobalContext } from '../GlobalContext'
import axios from 'axios'
import logo from '../assets/sattonjanamLogo.svg'
import Title from 'antd/es/skeleton/Title';

function EnquireForm({children}) {
    const [alertData, setAlertData] = useState({
        type: "",
        message: "",
        show: false,
      });

    const { TextArea } = Input;
    const [show, setShow] = useState(true);
    const [enquery,setEnquery] = useState({
        userName : '',
        email : '',
        phoneNumber : '',
        query : []
    })

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const token = context.token

    const readValue = (e) => {
        const { name, value } = e.target
        setEnquery({ ...enquery, [name]:value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const newQuery = {...enquery}

            axios.post(`https://sattonjanam-be.onrender.com/api/v1/query/queryCreate`, newQuery)

            axios.post(`https://sattonjanam-be.onrender.com/api/v1/query/sendQuery`, {userName: newQuery.userName, email: newQuery.email, phoneNumber: newQuery.phoneNumber, query: newQuery.query})
            
            .then( res =>  {
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

              //  navigate('/')

        } catch (error) {
            setAlertData({
              type: "error",
              message: error.response.data.msg,
              show: true,
            });
          }

       
    }
    const handleCancel = () => {
      navigate('/');
    };
    
  return (
    <>
    
    
    { show ? 
    <div className='enqForm'>
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
        <img src={logo} alt="no image" width={120} height={120}/>
         {/* <button onClick={() => setShow(!show)} className="closeButton">&times;</button> */}
         <h1>Enquiry form</h1>
        {/* <Title>Enquiry form</Title> */}
      <Form className='formContainer'>
      
            <div className="name-container">
                <Form.Item htmlFor="userName">
                    <Input type="text" name="userName" id="userName" placeholder="Your Name"
                    onChange={readValue} className='inputEnquiry'/>
                </Form.Item>
                <Form.Item htmlFor="email">
                    <Input type="email" name="email" id="email" placeholder="Email Id"
                    onChange={readValue} className='inputEnquiry'/>
                </Form.Item>
                <Form.Item htmlFor="phoneNumber" className="name">
                    <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"
                    onChange={readValue} className='inputEnquiry'/>
                </Form.Item>
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
                    className='inputEnquiry'
                    />
                </Form.Item>
                <a><Button className="btn" onClick={submitHandler}>Send Message</Button>
                    <Button className='btn' onClick={handleCancel}>
                      Cancel
                    </Button></a>
            </div>
      </Form>
    </div> : null }
    
    </>
  )
}

export default EnquireForm
