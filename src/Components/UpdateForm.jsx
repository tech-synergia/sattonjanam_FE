// UpdateForm.js
import React from "react";
import { Form, Input, Button } from "antd";

function UpdateForm({ initialValues, onCancel, onFinish }) {
  return (
    <Form initialValues={initialValues} onFinish={onFinish}>
      <Form.Item name="userName" label="User Name">
        <Input />
      </Form.Item>
     
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: 10 }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UpdateForm;
