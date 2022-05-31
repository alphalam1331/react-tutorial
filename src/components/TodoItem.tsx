import { useEffect, useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props: { id: number; task: string }) => {
  const { id, task } = props;

  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setisEditing] = useState(false);

  const [text, setText] = useState(task);
  const [description, setDescription] = useState(task);

  const onDelete = (id: number) => {
    // TODO
  };
  const updateTask = (id: number, text: string) => {
    // TODO
  };

  return (
    <li>
      <div>{id}</div>
      <div>{task}</div>
    </li>
  );
};

export default TodoItem;
