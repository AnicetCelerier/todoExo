import TaskComponent from "../TaskComponents";
import { useState } from "react";
import { TaskType } from "../../types";

type TableComponentProps = {
  task: TaskType | undefined,
};

const TableComponent = (props: TableComponentProps) => {
  const { task } = props;
  console.log(task, 'olé')
  const [tasks, setTasks] = useState<TaskType[]>([]);
  // const [checkTask, setCheckTask] = useState<boolean>();
  // const [deleteTask, setDeleteTask] = useState<boolean>();

  const addTask = (): void => {
    setTasks([...tasks, task]);
  };

  // const handleDeleteTask = (content) =>{
  //   setTasks(tasks.filter((task)=> task.content !== content))
  // }

  // const handleCompleteTask = (task) =>{
  //   setTasks(
  //     tasks.map((item) => {
  //       if (item.content === task.content){
  //         return{...item, completed: !item.completed}}})}



  return (
    <ul>
      {tasks.map((task: TaskType, i: number) => {
        return (
          <li>
            <TaskComponent key={i} task={task} 
              // checkTask={checkTask}
              // deleteTask={deleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TableComponent;
