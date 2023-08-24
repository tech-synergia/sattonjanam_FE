import { Typography, Form, Input, Button } from "antd";
import '../scss/ContactForm.scss'


const { Title, Text } = Typography;

function ContactForm() {
  return (
    <div className='contactForm'>
      <div className="leftSideAddress">
        <div className="addressContent">
            <Title level={3}>For Matrimonial / Matchmaking Requirements:</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> +91-9599991980 & +91-1147094491 / 92</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Portfolio Or Wedding Shoots</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i> +91-9599991982 / 83</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Marriage Counselling</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i>  +91-9599991982 / 83</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Wedding Events Planning Services</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i>  +91-9599991982 / 83</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>For Careers Or Jobs With Wedgate Matrimony:</Title>
            <Text className="text"><i className="bi bi-telephone-fill"></i>  +91-9599991983 / 84</Text>
        </div>
        <hr />
        <div className="addressContent">
            <Title level={3}>Our Address</Title>
            <Text>I-7, Metro Pillar No 333, Najafgarh Road, Near Moti Nagar Metro Station, Kailash Park, New Delhi 110015 (Above Pind Balluchi Restaurant)</Text>
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
