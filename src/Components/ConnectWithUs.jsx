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
                <p>Add- 224, Ground floor, IP colony Faridabad, Haryana. Pin- 121009</p>
            </div>
            <div className="address">
                <p>9773643677</p>
              
            </div>
            <div className="address">
                <p>www.sattonjanam.com</p>
                <p>Support@sattonjanam.com</p>
            </div>
        </div>
    </div>
  )
}

export default ConnectWithUs
