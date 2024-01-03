/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input, Button, Row, Col, Form } from "antd";
import { addTask } from "../Slice/tasksSlice";
import { useDispatch } from "react-redux";

const TaskForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const { taskTitle, taskDescription } = values;

    if (taskTitle && taskDescription) {
      dispatch(
        addTask({
          id: Date.now(),
          title: taskTitle,
          description: taskDescription,
        })
      );
      form.resetFields();
    }
  };


  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Form.Item
              name="taskTitle"
              rules={[
                {
                  required: true,
                  message: "Task Title is required",
                },
              ]}
            >
              <Input placeholder="Task Title" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="taskDescription"
              rules={[
                {
                  required: true,
                  message: "Task Description is required",
                },
              ]}
            >
              <Input.TextArea placeholder="Task Description" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="default" htmlType="submit">
                Add Task
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <hr className="my-3" />
    </>
  );
};

export default TaskForm;
