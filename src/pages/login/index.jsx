import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/loginSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, message } from "antd";

const { Title, Text } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(loginUser(values)).unwrap().then(() => {
      message.success("Muvaffaqiyatli Kirish amalga oshirildi!");
      navigate("/");
    }).catch((error) => {
      message.error(error || "foydalanuvchi nomi yoki parolda xatolik!");
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center max-md:px-5 bg-gray-200">
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="w-[500px] max-md:w-full bg-white shadow-md pt-5 px-10 max-md:px-5 rounded-2xl"
      >
        <Title className="text-center pb-2" level={3}>
          Kirish
        </Title>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Iltimos, foydalanuvchi nomini kiriting!" }]}
        >
          <Input placeholder="Foydalanuvchi nomi" className="mb-2" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Iltimos, parolni kiriting!" }]}
        >
          <Input.Password placeholder="Parol" className="my-2" />
        </Form.Item>
        <Button className="mt-2" type="primary" htmlType="submit" block loading={loading}>
          Kirish
        </Button>
        {error && <Text type="danger">{error}</Text>}
        <Form.Item className="flex items-center justify-center pt-2">
          <Text>
            Ro'yxatdan o'tmaganmisiz? <NavLink to="/register">Ro'yxatdan o'tish</NavLink>
          </Text>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;