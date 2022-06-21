import React, { FC } from "react";
import TableComponent from "./components/TableComponents";
import FormComponent from "./components/FormComponents";
import useApp from "./hooks/useApp";
import "./App.css";
import { Grid, Segment, Header } from "semantic-ui-react";

const App: FC = () => {
  const { tasks, addTask, deleteTask, toggleTask, updateTask } = useApp();

  return (
    <Grid columns="equal">
      <Grid.Row height={4}></Grid.Row>
      <Grid.Column></Grid.Column>
      <Grid.Column width={8}>
        <Segment>
          <div>
            <Header as="h1">Todo list</Header> {/* quelle utilité ? */}
          </div>
          <div>
            <FormComponent onSubmit={addTask} />
          </div>
          <div>
            <TableComponent
              tasks={tasks}
              onDelete={deleteTask}
              onClickColumn={toggleTask}
              onEdit={updateTask}
            />
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default App;
