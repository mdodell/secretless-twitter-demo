import React from 'react';
import { Card, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const TokenForm = ({onFinish}) => {
  return (
  <Card className="full-width mt-1 ant-list-bordered">
    <Title level={4}>Enter your token below!</Title>
    <Form
       name="basic"
       onFinish={onFinish}
    >
      <Form.Item
        label="Twitter Bearer Token"
        name="twitter_token"
         rules={[{ required: true, message: 'Please input your Bearer token' }]}
        >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="danger" htmlType="submit">
          Fetch Tweets Without Secretless
        </Button>
      </Form.Item>
    </Form>
  </Card>
  )
}

export default TokenForm;
