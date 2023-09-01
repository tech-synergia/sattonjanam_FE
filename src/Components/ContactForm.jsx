import { Typography, Form, Input, Button } from "antd";
import '../scss/ContactForm.scss'


const { Title, Text } = Typography;

function ContactForm() {
  return (
    <div className='contactForm'>
      <div className="leftSideAddress">
        <div className="addressContent">
            <Title level={3}>For Matrimonial / Matchmaking Requirements:</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> 9773643677</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Portfolio Or Wedding Shoots</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> 9773643677</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Marriage Counselling</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> 9773643677</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Wedding Events Planning Services</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> 9773643677</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Careers Or Jobs With Sattonjanam Matrimony:</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> 9773643677</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>Our Address</Title>
            <Text>Add- 224, Ground floor, IP colony Faridabad, Haryana. Pin- 121009</Text>
        </div>
      </div>
      <div className="rightForm">
            <Form className="form" >
                <Form.Item htmlFor="name">
                    <Input type="text" name="name" id="name" placeholder="Your Name" className="input"/>
                </Form.Item>
                <Form.Item htmlFor="phone" className="name">
                    <Input type="number" name="phone" id="phone" placeholder="Phone" className="input"/>
                </Form.Item>
                <Form.Item htmlFor="email">
                    <Input type="email" name="email" id="email" placeholder="Email Id" className="input"/>
                </Form.Item>
                <Form.Item htmlFor="location" className="name">
                    <Input type="text" name="location" id="location" placeholder="Seeking Alliance For" className="input"/>
                </Form.Item>
                <Button className="btn">Send Message</Button>
            </Form>

      </div>
    </div>
  )
}

export default ContactForm
