import { TaskType } from "../../types";

type TaskProps = {
  task: TaskType;
  checkTask(checkedTaskContent: boolean): void;
  deleteTask(deleteTask: string): void;
  key : number;
  
};

const TaskComponent = (props: TaskProps) => {
  const { task, checkTask, deleteTask } = props;

  return (
    <div>
      <button onClick={() => deleteTask(task.content)}>X</button>
      <span>{task.content}</span>
      <input type="checkbox" onClick={() => checkTask(task.checked)} />
    </div>
  );
};

export default TaskComponent;
