import React, { useState, FC } from "react";
import TableComponent from "./components/TableComponents";
import FormComponent from "./components/FormComponents";
import { TaskType } from "./types";

const App: FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (t: TaskType) => {
    // setTasks(Array.from(tasks.concat(t)));

    setTasks((_tasks: TaskType[]) => {
      _tasks = _tasks.concat(t);
      return Array.from(_tasks);
    });
  };

  const deleteTask = (t: TaskType) => {
    // _tasks.filter((_t: TaskType) => {
    //   if (_t.content === t.content) return true;
    //   return false;
    // });
    // _tasks.filter((_t: TaskType) => _t.content === t.content)
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <FormComponent onSubmit={addTask} />
      </div>
      <div>
        <TableComponent tasks={tasks} onDelete={deleteTask} />
      </div>
    </>
  );
};

export default App;
