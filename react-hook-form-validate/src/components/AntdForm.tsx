import { FC } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select, Cascader } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

const AntdForm: FC = () => {
  return (
    <Form {...formItemLayout}>
      <Form.Item label="필수값-A">
        <Input placeholder="필수값-A" />
      </Form.Item>

      <Form.Item label="필수값-B">
        <Input placeholder="필수값-B" prefix={<SmileOutlined />} />
      </Form.Item>

      <Form.Item label="필수값-C">
        <Input placeholder="필수값-C" />
      </Form.Item>

      <Form.Item label="선택값-A">
        <Input placeholder="선택값-A" />
      </Form.Item>

      <Form.Item label="선택값-B">
        <Input placeholder="선택값-B (선택값-A가 입력된 경우 필수)" />
      </Form.Item>

      <Form.Item label="선택값-C">
        <Input placeholder="선택값-C (선택값-B가 입력된 경우 활성화 및 필수)" />
      </Form.Item>

      <Form.Item label="필수값-D">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="선택값-D">
        <TimePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="필수값-E">
        <Select>
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="필수값-F">
        <Cascader
          options={[
            { value: 'xx', label: 'xx' },
            { value: 'xx1', label: 'xx1' },
            { value: 'xx2', label: 'xx2' },
          ]}
        />
      </Form.Item>

      <Form.Item label="선택값-E">
        <Input placeholder="선택값-E (필수값-E가 2, 필수값-F가 xx1인 경우 활성화 및 필수)" />
      </Form.Item>
    </Form>
  );
};

export default AntdForm;
