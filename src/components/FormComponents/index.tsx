import { TaskType } from "../../types";
import useFormComponent from "../../hooks/hooks/useFormComponents";

export type FormComponentProps = {
  onSubmit: (task: TaskType) => void;
};

const FormComponent = (props: FormComponentProps) => {
  const { handleSubmit, setTaskText, taskText } = useFormComponent(props);

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
              setTaskText(e.target.value);
            }}
          />
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
