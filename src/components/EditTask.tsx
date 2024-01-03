/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { editTask } from "../Slice/tasksSlice";
import { useDispatch } from "react-redux";

interface EditTaskProps {
  task: any;
  onCancel: () => void;
}
const {Title} = Typography;

const EditTask: React.FC<EditTaskProps> = ({ task, onCancel }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  console.log(task);
  

  const handleEditTask = (values: any) => {
    if (values.title && values.description) {
      dispatch(
        editTask({
          id: task.id,
          ...values,
        })
      );
      onCancel();
      form.resetFields();
    }
  };

  return (
    <Form form={form} onFinish={handleEditTask}>
      <Title level={5}>Task Name</Title>
      <Form.Item
        name="title"
        initialValue={task.title}
        rules={[
          {
            required: true,
            message: "Title is required",
          },
        ]}
      >
        <Input placeholder="Task Title" />
      </Form.Item>
      <Title level={5}>Task Description</Title>
      <Form.Item
        name="description"
        initialValue={task.description}
        rules={[
          {
            required: true,
            message: "Description is required",
          },
        ]}
      >
        <Input.TextArea placeholder="Task Description" />
      </Form.Item>
      <Form.Item>
        <Button type="default" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditTask;
