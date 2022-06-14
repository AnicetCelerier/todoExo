import { useState, FormEvent } from "react";
import { TaskType } from "../../types";

type FormComponentProps = {
  onSubmit: (task: TaskType) => void;
};

const FormComponent = (props: FormComponentProps) => {
  const [taskText, setTaskText] = useState<string>("");
  // const [task, setTask] = useState<TaskType>({
  //   content: taskText,
  //   checked: false
  // })

  const { onSubmit } = props;

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask: TaskType = {
        content: taskText,
        checked: false,
      };
      onSubmit(newTask);
    }
  };

  return (
    <form>
      <div>
        <label>
          Entrez le tâche à faire:
          <input
            type="string"
            value={taskText}
            required
            onChange={(e) => {
              if (e.target.value) {
                setTaskText(e.target.value);
              }
            }}
          />
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
      <div>{/* <TableComponent taskText={taskText}/> */}</div>
    </form>
  );
};

export default FormComponent;
