import React, { FC } from "react";
import TableComponent from "./components/TableComponents";
import FormComponent from "./components/FormComponents";
import useApp from "./hooks/useApp";

import "./App.css";

const App: FC = () => {
  const { tasks, addTask, deleteTask, checkTask } = useApp();

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <FormComponent onSubmit={addTask} />
      </div>
      <div>
        <TableComponent
          tasks={tasks}
          onDelete={deleteTask}
          onClickColumn={checkTask}
        />
      </div>
    </>
  );
};

export default App;
