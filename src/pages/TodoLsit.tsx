import { FormEvent, useContext, useState } from "react";
import TodoItem from "../components/TodoItem";
import { toDoContext } from "../context/toDoContext";
import { UserNameContext } from "../context/userNameContext";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [itemList, setItemList] = useState<Array<{ id: number; task: string }>>([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const { name } = useContext(UserNameContext);

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  return (
    <>
      <div>{name}'s To-Do List</div>
      <form onSubmit={addTask} className={styles.form}>
        <input
          type="text"
          placeholder="Add new task"
          required
          value={task}
          name="task"
          onInput={(e) => {
            setTask(e.currentTarget.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Description"
          required
          value={description}
          onInput={(e) => {
            setDescription(e.currentTarget.value);
          }}
        ></input>
        <input type="submit" placeholder="submit" value="submit"></input>
      </form>
      <toDoContext.Provider value={{itemList, setItemList}}>
        
      </toDoContext.Provider>
    </>
  );
};

export default TodoList;
