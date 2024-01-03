/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/TaskList.tsx
import React, { useState } from "react";
import { List, Modal, Button, Radio, Row, Col, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import { RootState } from "../store";
import { toggleTask } from "../Slice/tasksSlice";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [editTaskModalVisible, setEditTaskModalVisible] = useState(false);
  const [deleteTaskModalVisible, setDeleteTaskModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "uncompleted") {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  };

  const handleEditTask = (task: any) => {
    setSelectedTask(task);
    setEditTaskModalVisible(true);
  };

  const handleDeleteTask = (task: any) => {
    setSelectedTask(task);
    setDeleteTaskModalVisible(true);
  };

  const handleEditTaskCancel = () => {
    setEditTaskModalVisible(false);
  };

  const handleDeleteTaskCancel = () => {
    setDeleteTaskModalVisible(false);
  };

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const handleCheckboxChange = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div>
      <Radio.Group onChange={handleFilterChange} value={filter}>
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="completed">Completed</Radio.Button>
        <Radio.Button value="uncompleted">Uncompleted</Radio.Button>
      </Radio.Group>
      <List
        dataSource={filteredTasks()}
        renderItem={(task) => (
          <List.Item>
            <List.Item.Meta title={task.title} description={task.description} />
            <Row gutter={8}>
              <Col span={10}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                >
                  Completed
                </Checkbox>
              </Col>
              <Col span={6}>
                <Button type="default" onClick={() => handleEditTask(task)}>
                  Edit
                </Button>
              </Col>
              <Col span={6}>
                <Button danger onClick={() => handleDeleteTask(task)}>
                  Delete
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
      <Modal
        title="Edit Task"
        visible={editTaskModalVisible}
        onCancel={handleEditTaskCancel}
        footer={null}
      >
        {selectedTask && (
          <EditTask task={selectedTask} onCancel={handleEditTaskCancel} />
        )}
      </Modal>
      <Modal
        title="Delete Task"
        visible={deleteTaskModalVisible}
        onCancel={handleDeleteTaskCancel}
        footer={null}
      >
        {selectedTask && (
          <DeleteTask task={selectedTask} onCancel={handleDeleteTaskCancel} />
        )}
      </Modal>
    </div>
  );
};

export default TaskList;
