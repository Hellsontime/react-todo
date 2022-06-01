import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Checkbox, Form, Input } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  LoadingOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons'
import Text from 'antd/lib/typography/Text'
import { REGISTRATION_PAGE_ROUTE } from '../routes/PagesRoutes'

import '../styles/PageStyles/LoginPage.sass'

export default function LoginPageComponent({ error, setError, onFinish, loading }) {
  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className="login-form"
      onChange={() => setError('')}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Email is required' },
          { type: 'email', message: 'Email is not valid' }
        ]}>
        <Input prefix={<UserOutlined />} placeholder="Email" className="login-form__input" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Password is required' },
          { min: 8, message: 'Password should be minimum 8 length' }
        ]}>
        <Input.Password
          prefix={<LockOutlined />}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          type="password"
          placeholder="Password"
          className="login-form__input"
        />
      </Form.Item>

      {loading ? (
        <LoadingOutlined />
      ) : (
        <Text className="login-form-error-text" type="danger">
          {error}
        </Text>
      )}

      <Form.Item name="remember" valuePropName="checked" className="login-form-checkbox">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>

        <Form.Item className="login-form-reg">
          Or
          <Link to={REGISTRATION_PAGE_ROUTE}> register now!</Link>
        </Form.Item>
      </Form.Item>
    </Form>
  )
}

LoginPageComponent.propTypes = {
  setError: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}
