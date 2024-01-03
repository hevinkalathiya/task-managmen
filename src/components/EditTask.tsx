/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button } from "antd";
import { editTask } from "../Slice/tasksSlice";
import { useDispatch } from "react-redux";

interface EditTaskProps {
  task: any;
  onCancel: () => void;
}

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
      <Form.Item
        label="Title"
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
      <Form.Item
        label="Description"
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
