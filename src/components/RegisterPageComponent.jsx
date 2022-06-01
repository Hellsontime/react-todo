import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { UserOutlined, LockOutlined, MailOutlined, LoadingOutlined } from '@ant-design/icons'
import { Form, Input, Button } from 'antd'
import Text from 'antd/lib/typography/Text'
import { LOGIN_PAGE_ROUTE } from '../routes/PagesRoutes'
import '../styles/PageStyles/RegisterPage.sass'

export default function RegisterPageComponent({ onFinish, error, loading }) {
  const [form] = Form.useForm()
  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      className="registration-form">
      <Form.Item
        name="name"
        rules={[
          {
            type: 'string',
            message: 'Please use the name!'
          },
          {
            required: true,
            message: 'Please input your name!'
          }
        ]}>
        <Input prefix={<UserOutlined />} placeholder="Username" className="login-form__input" />
      </Form.Item>
      <Form.Item
        name="email"
        autoComplete="username"
        rules={[
          {
            type: 'email',
            message: 'Please use the valid e-mail!'
          },
          {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}>
        <Input
          name="username"
          prefix={<MailOutlined />}
          placeholder="E-mail"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
          {
            min: 8,
            message: 'Password should be minimum 8 length'
          }
        ]}
        hasFeedback>
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item
        name="password_confirmation"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Passwords do not match!'))
            }
          })
        ]}>
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Confirm Password"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        {loading ? (
          <LoadingOutlined />
        ) : (
          <Text className="login-form-error-text" type="danger">
            {error}
          </Text>
        )}
        <Button className="registration-form-button" type="primary" htmlType="submit">
          Register
        </Button>
        <Link to={LOGIN_PAGE_ROUTE}>Already have an account?</Link>
      </Form.Item>
    </Form>
  )
}

RegisterPageComponent.propTypes = {
  onFinish: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}
