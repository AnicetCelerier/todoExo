import { TaskType } from "../../types";
import "./style.css";
import { Table, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

type TableComponentProps = {
  tasks: TaskType[];
  onDelete: (task: TaskType) => void;
  onClickColumn: (task: TaskType) => void;
  onEdit: (task: TaskType, content: string) => void;
};

const TableComponent = (props: TableComponentProps) => {
  const { tasks, onDelete, onClickColumn, onEdit } = props;
  const [showEdit, setShowEdit] = useState(false);
  // setShowEdit(prevShowEdit => !prevShowEdit)

  // console.log(editedTask, 'editedTask')

  return (
    <Table basic="very">
      <Table.Body>
        {tasks.map((task: TaskType, i: number) => {
          return (
            <Table.Row key={`table-component-${i}`}>
              {/* <input
            type="string"
            placeholder={task.content}
            onChange={(e) => {
              onEdit(task, e.target.value);
            }}
          /> */}

              <Table.Cell>
                {showEdit ? (
                  <input
                    type="string"
                    placeholder={task.content}
                    onChange={(e) => {
                      onEdit(task, e.target.value);
                    }}
                  />
                ) : (
                  <span
                    onClick={() => {
                      onClickColumn(task);
                    }}
                    style={
                      task.checked === true
                        ? { color: "green" }
                        : { color: "black" }
                    }
                  >
                    {task.content}
                  </span>
                )}{" "}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    onDelete(task);
                  }}
                >
                  <Icon name="delete" />
                </Button>
                <Button
                  onClick={() => {
                    setShowEdit(!showEdit);
                  }}
                >
                  <Icon name="edit" />
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TableComponent;
