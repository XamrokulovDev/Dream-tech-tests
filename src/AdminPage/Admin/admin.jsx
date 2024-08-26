import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Form, Input, Button, Select } from "antd";
import FrontendTest from "../FrontendTest";
import BackendTest from "../BackendTest";

const { Option } = Select;

const Admin = () => {
  const [isCreateTestsVisible, setIsCreateTestsVisible] = useState(false);

  const handleToggleCreateTests = () => {
    setIsCreateTestsVisible(!isCreateTestsVisible);
  };

  return (
    <div className="w-screen relative">
      <nav className="bg-black py-4 relative">
        <div className="container flex justify-between items-center">
          <div className=""></div>
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
              layout="vertical"
              className="w-[500px] max-md:w-full bg-white rounded-lg p-5 pt-16"
              onFinish={(values) => console.log(values)}
            >
              <Form.Item
                name="question"
                rules={[{ required: true, message: 'Please enter the question!' }]}
              >
                <Input placeholder="Enter question" />
              </Form.Item>
              <Form.Item
                name="option_a"
                rules={[{ required: true, message: 'Please enter option A!' }]}
              >
                <Input placeholder="Enter option A" />
              </Form.Item>
              <Form.Item
                name="option_b"
                rules={[{ required: true, message: 'Please enter option B!' }]}
              >
                <Input placeholder="Enter option B" />
              </Form.Item>
              <Form.Item
                name="option_c"
                rules={[{ required: true, message: 'Please enter option C!' }]}
              >
                <Input placeholder="Enter option C" />
              </Form.Item>
              <Form.Item
                name="option_d"
                rules={[{ required: true, message: 'Please enter option D!' }]}
              >
                <Input placeholder="Enter option D" />
              </Form.Item>
              <Form.Item
                name="correct_option"
                rules={[{ required: true, message: 'Please enter the correct option!' }]}
              >
                <Input placeholder="Enter correct option" />
              </Form.Item>
              <div className="flex items-center gap-3">
              <Form.Item
                name="main_title"
                rules={[{ required: true, message: 'Please select the main title!' }]}
              >
                <Select placeholder="Select main title">
                  <Option value="frontend">Frontend</Option>
                  <Option value="backend">Backend</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="title"
                rules={[{ required: true, message: 'Please select the title!' }]}
              >
                <Select placeholder="Select title">
                  <Option value="junior">Junior</Option>
                  <Option value="middle">Middle</Option>
                  <Option value="senior">Senior</Option>
                </Select>
              </Form.Item>

              </div>
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