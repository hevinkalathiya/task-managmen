/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Slice/tasksSlice";

interface DeleteTaskProps {
  task: any;
  onCancel: () => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ task, onCancel }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
    onCancel();
  };

  return (
    <div>
      <p>Are you sure you want to delete this task?</p>
      <Button
        className="mr-2"
        danger
        onClick={handleDeleteTask}
      >
        Delete
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};

export default DeleteTask;
