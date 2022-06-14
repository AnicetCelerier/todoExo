import React, { useState, FC } from "react";
import TableComponent from "./components/TableComponents";
import FormComponent from "./components/FormComponents";
import { TaskType } from "./types"


const App: FC = () => {
  const [task, setTask] = useState<TaskType>();
  console.log(task, 'task')
  console.log(setTask, 'setTask')


  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <FormComponent onSubmit={setTask} />
      </div>
      <div>
        <TableComponent task={task} />
      </div>
    </>
  );
};

export default App;
