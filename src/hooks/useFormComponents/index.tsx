import { useState, FormEvent } from "react";
import { FormComponentProps } from "../../components/FormComponents";
import { TaskType } from "../../types";

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
