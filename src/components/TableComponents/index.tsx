import { ok } from "assert";
import { TaskType } from "../../types";
import { useState } from "react";
import "./style.css";

type TableComponentProps = {
  tasks: TaskType[];
  onDelete: (task: TaskType) => void;
  onClickColumn: (task: TaskType) => void;
};

const TableComponent = (props: TableComponentProps) => {
  const { tasks, onDelete, onClickColumn } = props;
  // const [style, setStyle] = useState("no")

  // const changeStyle = () => {
  //   setStyle("yes")
  // }

  return (
    <ul>
      {tasks.map((task: TaskType, i: number) => {
        return (
          <li key={`table-component-${i}`}>
            <span
              onClick={() => {
                onClickColumn(task);
              }}
              style={
                task.checked === true ? { color: "green" } : { color: "black" }
              }
            >
              {task.content}
            </span>{" "}
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
