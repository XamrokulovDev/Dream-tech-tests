import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/userSlice';

const { Title, Text } = Typography;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.register);

  const onFinish = async (values) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      // Success logic here, e.g., redirect to login page
      notification.success({
        message: 'Ro\'yxatdan o\'tish muvaffaqiyatli',
      });
      navigate('/login');
    } catch (err) {
      console.error('Failed to register:', err);

      // Error handling
      if (err.username && err.username.length > 0) {
        notification.error({
          message: 'Xatolik',
          description:'Foydalanuvchi nomi band.',
        });
      } else {
        notification.error({
          message: 'Xatolik',
          description: 'Ro\'yxatdan o\'tishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
        });
      }
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center max-md:px-5 bg-gray-200'>
      <Form
        layout="vertical"
        onFinish={onFinish}
        className='w-[500px] max-md:w-full bg-white shadow-md pt-5 px-10 max-md:px-5 rounded-2xl'
      >
        <Title className='text-center pb-2' level={3}>Ro'yxatdan o'tish</Title>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Iltimos, foydalanuvchi nomini kiriting!' }]}
        >
          <Input placeholder="Foydalanuvchi nomi" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Iltimos, elektron pochta manzilini kiriting!' }]}
        >
          <Input placeholder="Elektron pochta manzili" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Iltimos, parolni kiriting!' }]}
        >
          <Input.Password placeholder="Parol" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={status === 'loading'}>
          Ro'yxatdan o'tish
        </Button>
        <Form.Item className='flex items-center justify-center pt-2'>
          <Text>Ro'yxatdan o'tganmisiz? <NavLink to="/login">Kirish</NavLink></Text>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;