import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Form, Input, Button, message, Select } from "antd"; // Ant Design Select komponentini import qilish
import FrontendTest from "../FrontendTest";
import BackendTest from "../BackendTest";
import { sendTestData } from "../../Redux/createSlice";

const { Option } = Select;

const Admin = () => {
  const [isCreateTestsVisible, setIsCreateTestsVisible] = useState(false);
  const [form] = Form.useForm(); // Form instance yaratish
  const dispatch = useDispatch();

  const handleToggleCreateTests = () => {
    setIsCreateTestsVisible(!isCreateTestsVisible);
  };

  const handleFormSubmit = (values) => {
    try {
      // To'g'ri variant matnini olish
      const correctOption = values.correct_option;
      const correctOptionText = values[`option_${correctOption.toLowerCase()}`] || "";

      // To'liq ma'lumotlarni yuborish
      const testData = {
        ...values,
        correct_option_text: correctOptionText,
      };

      dispatch(sendTestData(testData));
      message.success("Savol muvaffaqiyatli qo'shildi!"); // Muvaffaqiyat xabari
      form.resetFields(); // Inputlarni tozalash
    } catch (error) {
      message.error("Savol qo'shishda xatolik yuz berdi."); // Xato xabari
    }
  };

  return (
    <div className="w-screen relative">
      <nav className="bg-black py-4 relative">
        <div className="container flex justify-between items-center">
          <NavLink to={"/"}>
            <BsBoxArrowLeft className="text-4xl text-white absolute top-[23%] cursor-pointer left-3" />
          </NavLink>
          <Button
            type="primary"
            className="flex items-center rounded-md gap-1"
            onClick={handleToggleCreateTests}
            icon={<FaPlus />}
          >
            Qo'shish
          </Button>
        </div>
      </nav>
      <div className="">
        <FrontendTest />
        <BackendTest />
      </div>
      {isCreateTestsVisible && (
        <div className="w-screen h-screen flex justify-center items-center bg-[#000000a5] absolute top-0 left-0 z-40 transition-opacity duration-500 ease-in-out">
          <div className="relative">
            <Form
              form={form} // Form instance qo'shish
              layout="vertical"
              className="w-[500px] max-md:w-[320px] bg-white rounded-lg p-5 pt-16"
              onFinish={handleFormSubmit}
            >
              <Form.Item
                name="main_title"
                rules={[
                  { required: true, message: "Please select a main title!" },
                ]}
              >
                <Select placeholder="Select main title">
                  <Option value="Frontend">Frontend</Option>
                  <Option value="Backend">Backend</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="title"
                rules={[
                  { required: true, message: "Please select a title!" },
                ]}
              >
                <Select placeholder="Select title">
                  <Option value="Junior">Junior</Option>
                  <Option value="Middle">Middle</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="question"
                rules={[
                  { required: true, message: "Please enter the question!" },
                  {
                    max: 255,
                    message: "The question must be at most 255 characters.",
                  },
                  { min: 1, message: "The question must be at least 1 character." },
                ]}
              >
                <Input placeholder="Enter question" />
              </Form.Item>
              <Form.Item
                name="option_a"
                rules={[
                  { required: true, message: "Please enter option A!" },
                  {
                    max: 255,
                    message: "Option A must be at most 255 characters.",
                  },
                  { min: 1, message: "Option A must be at least 1 character." },
                ]}
              >
                <Input placeholder="Enter option A" />
              </Form.Item>
              <Form.Item
                name="option_b"
                rules={[
                  { required: true, message: "Please enter option B!" },
                  {
                    max: 255,
                    message: "Option B must be at most 255 characters.",
                  },
                  { min: 1, message: "Option B must be at least 1 character." },
                ]}
              >
                <Input placeholder="Enter option B" />
              </Form.Item>
              <Form.Item
                name="option_c"
                rules={[
                  { required: true, message: "Please enter option C!" },
                  {
                    max: 255,
                    message: "Option C must be at most 255 characters.",
                  },
                  { min: 1, message: "Option C must be at least 1 character." },
                ]}
              >
                <Input placeholder="Enter option C" />
              </Form.Item>
              <Form.Item
                name="option_d"
                rules={[
                  { required: true, message: "Please enter option D!" },
                  {
                    max: 255,
                    message: "Option D must be at most 255 characters.",
                  },
                  { min: 1, message: "Option D must be at least 1 character." },
                ]}
              >
                <Input placeholder="Enter option D" />
              </Form.Item>
              <Form.Item
                name="correct_option"
                rules={[
                  { required: true, message: "Please select the correct option!" },
                ]}
              >
                <Select placeholder="Select correct option">
                  <Option value="A">Option A</Option>
                  <Option value="B">Option B</Option>
                  <Option value="C">Option C</Option>
                  <Option value="D">Option D</Option>
                </Select>
              </Form.Item>
              <div className="w-full flex items-center justify-end">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <IoIosCloseCircleOutline
              className="text-3xl text-gray-600 absolute top-2 right-2 cursor-pointer"
              onClick={handleToggleCreateTests}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;