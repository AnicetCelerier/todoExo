import { useState, useEffect, FormEvent } from "react";
import { TaskType } from "../../../types";

type FormComponentProps = {
  onSubmit: (task: TaskType) => void;
};

const useFormComponent = (props: FormComponentProps) => {
  const [taskText, setTaskText] = useState<string>("");
  const { onSubmit } = props;

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask: TaskType = {
        content: taskText,
        checked: false,
      };
      onSubmit(newTask);
      setTaskText("");
    }
  };

  return {
    handleSubmit,
    setTaskText,
    taskText,
  };
};

export default useFormComponent;
