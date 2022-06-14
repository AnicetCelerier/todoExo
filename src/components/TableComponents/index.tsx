import { TaskType } from "../../types";

type TableComponentProps = {
  tasks: TaskType[];
  onDelete: (task: TaskType) => void;
};

const TableComponent = (props: TableComponentProps) => {
  const { tasks, onDelete } = props;



  return (
    <ul>
      {tasks.map((task: TaskType, i: number) => {
        return (
          <li key={`table-component-${i}`}>
            {task.content}{" "}
            <button
              onClick={() => {
                onDelete(task)
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
