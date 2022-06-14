import { TaskType } from "../../types";

type TableComponentProps = {
  tasks: TaskType[];
  onClickColumn: (task: TaskType) => void;
  onDelete: (task: TaskType) => void;
};

const TableComponent = (props: TableComponentProps) => {
  const { tasks, onClickColumn, onDelete } = props;

  return (
    <ul>
      {tasks.map((task: TaskType, i: number) => {
        return (
          <li key={`table-component-${i}`}>
            <span onClick={() => onClickColumn(task)}>{task.content} </span>
            <button
              onClick={() => {
                onDelete(task);
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TableComponent;
