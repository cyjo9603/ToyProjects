import { FC } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';

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

const tailLayout = {
  wrapperCol: { offset: 15 },
};

const AntdForm: FC = () => {
  const { handleSubmit, control, errors, watch } = useForm();

  const watchOptionalA = watch('optional-A');
  const watchOptionalB = watch('optional-B');
  const watchRequiredE = watch('required-E');
  const watchRequiredF = watch('required-F');

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...formItemLayout} onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        label="필수값-A"
        validateStatus={errors['required-A'] ? 'error' : 'success'}
        help={errors['required-A'] && '입력해주세요'}
        required
      >
        <Controller
          name="required-A"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Input placeholder="필수값-A" onChange={onChange} value={value} />
          )}
        />
      </Form.Item>

      <Form.Item
        label="필수값-B"
        validateStatus={errors['required-B'] ? 'error' : 'success'}
        help={errors['required-B'] && '입력해주세요'}
        required
      >
        <Controller
          name="required-B"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Input
              placeholder="필수값-B"
              prefix={<SmileOutlined />}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="필수값-C"
        validateStatus={errors['required-C'] ? 'error' : 'success'}
        help={errors['required-C'] && '입력해주세요'}
        required
      >
        <Controller
          name="required-C"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Input placeholder="필수값-C" onChange={onChange} value={value} />
          )}
        />
      </Form.Item>

      <Form.Item label="선택값-A">
        <Controller
          name="optional-A"
          control={control}
          render={({ onChange, value }) => (
            <Input placeholder="선택값-A" onChange={onChange} value={value} />
          )}
        />
      </Form.Item>

      <Form.Item
        label="선택값-B"
        validateStatus={errors['optional-B'] ? 'error' : 'success'}
        help={errors['optional-B'] && '입력해주세요'}
        required={Boolean(watchOptionalA)}
      >
        <Controller
          name="optional-B"
          control={control}
          rules={{ required: Boolean(watchOptionalA) }}
          render={({ onChange, value }) => (
            <Input
              placeholder="선택값-B (선택값-A가 입력된 경우 필수)"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Form.Item>

      {watchOptionalB && (
        <Form.Item
          label="선택값-C"
          validateStatus={errors['optional-C'] ? 'error' : 'success'}
          help={errors['optional-C'] && '입력해주세요'}
          required={true}
        >
          <Controller
            name="optional-C"
            control={control}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <Input
                placeholder="선택값-C (선택값-B가 입력된 경우 활성화 및 필수)"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>
      )}

      <Form.Item
        label="필수값-D"
        validateStatus={errors['required-D'] ? 'error' : 'success'}
        help={errors['required-D'] && '입력해주세요'}
        required
      >
        <Controller
          name="required-D"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <DatePicker style={{ width: '100%' }} onChange={onChange} value={value} />
          )}
        />
      </Form.Item>

      <Form.Item label="선택값-D">
        <Controller
          name="optional-D"
          control={control}
          render={({ onChange, value }) => (
            <TimePicker style={{ width: '100%' }} onChange={onChange} value={value} />
          )}
        />
      </Form.Item>

      <Form.Item
        label="필수값-E"
        validateStatus={errors['required-E'] ? 'error' : 'success'}
        help={errors['required-E'] && '입력해주세요'}
        required
      >
        <Controller
          name="required-E"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Select onChange={onChange} value={value}>
              <Select.Option value="1">Option 1</Select.Option>
              <Select.Option value="2">Option 2</Select.Option>
              <Select.Option value="3">Option 3</Select.Option>
            </Select>
          )}
        />
      </Form.Item>

      <Form.Item
        label="필수값-F"
        validateStatus={errors['required-F'] ? 'error' : 'success'}
        help={errors['required-F'] && '입력해주세요'}
        required
      >
        <Controller
          name="required-F"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Cascader
              onChange={onChange}
              value={value}
              options={[
                { value: 'xx', label: 'xx' },
                { value: 'xx1', label: 'xx1' },
                { value: 'xx2', label: 'xx2' },
              ]}
            />
          )}
        />
      </Form.Item>

      {watchRequiredE === '2' && watchRequiredF?.[0] === 'xx1' && (
        <Form.Item
          label="선택값-E"
          validateStatus={errors['optional-E'] ? 'error' : 'success'}
          help={errors['optional-E'] && '입력해주세요'}
          required
        >
          <Controller
            name="optional-E"
            control={control}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <Input
                placeholder="선택값-E (필수값-E가 2, 필수값-F가 xx1인 경우 활성화 및 필수)"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>
      )}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          입력
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntdForm;
