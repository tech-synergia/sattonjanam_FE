import { Form, Input, Radio, Button } from "antd";
import '../scss/ConnectWithUs.scss'

function ConnectWithUs() {
  return (
    <div className="connectUs">
        <h1>Connect With Us</h1>
        <Form className="formContainer" >
            <Form.Item className="gender" label="Looking For" htmlFor="gender">
                <Radio.Group name="gender" id="gender">
                <Radio value="bride"><strong>Bride</strong></Radio>
                <Radio value="groom"><strong>Groom</strong></Radio>
                </Radio.Group>
            </Form.Item>
            <div className="name-container">
                <Form.Item htmlFor="name">
                    <Input type="text" name="name" id="name" placeholder="Your Name"/>
                </Form.Item>
                <Form.Item htmlFor="email">
                    <Input type="email" name="email" id="email" placeholder="Email Id"/>
                </Form.Item>
            </div>
            <div className="name-container">
                <Form.Item htmlFor="phone" className="name">
                    <Input type="number" name="phone" id="phone" placeholder="Phone"/>
                </Form.Item>
                <Form.Item htmlFor="location" className="name">
                    <Input type="text" name="location" id="location" placeholder="Location"/>
                </Form.Item>
            </div>
            <Form.Item htmlFor="file">
                <Input type="file" name="file" id="file" placeholder="Attach Your Profile"/>
            </Form.Item>
            <Button className="btn">Send Query</Button>
        </Form>

        <div className="contactAddress">
            <div className="address">
                <p>I-7, Metro Pillar No 333, Najafgarh Road, Near Moti Nagar Metro Station, Kailash Park, New Delhi 110015 (Above Pind Balluchi Restaurant) Get Direction</p>
            </div>
            <div className="address">
                <p>+91-11-47094491</p>
                <p>+91-9599991980</p>
            </div>
            <div className="address">
                <p>contact@wedgatematrimony.com</p>
                <p>www.wedgatematrimony.com</p>
            </div>
        </div>
    </div>
  )
}

export default ConnectWithUs
