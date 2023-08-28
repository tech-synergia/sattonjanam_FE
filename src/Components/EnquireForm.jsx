import React from 'react'
import { Form, Input, Button , Modal} from 'antd'
import '../scss/EnquireForm.scss'
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons'


function EnquireForm({children}) {
    const { TextArea } = Input;
    const [show, setShow] = useState(true);
    
    
  return (
    <>
    
    { show ? 
    <div className='enqForm'>
         <button onClick={() => setShow(!show)} className="closeButton">&times;</button>
        
      <Form className='formContainer'>
            <div className="name-container">
                <Form.Item htmlFor="name">
                    <Input type="text" name="name" id="name" placeholder="Your Name"/>
                </Form.Item>
                <Form.Item htmlFor="email">
                    <Input type="email" name="email" id="email" placeholder="Email Id"/>
                </Form.Item>
                <Form.Item htmlFor="phone" className="name">
                    <Input type="number" name="phone" id="phone" placeholder="Phone"/>
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
                    />
                </Form.Item>
                <a href="mailto:contact@wedgatematrimony.com"><Button className="btn">Send Message</Button></a>
            </div>
      </Form>
    </div> : null }
    
    </>
  )
}

export default EnquireForm
