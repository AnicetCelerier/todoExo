import { TaskType } from "../../types";
import useFormComponent from "../../hooks/hooks/useFormComponents";



const FormComponent = () => {
  const { handleSubmit, setTaskText, taskText } = useFormComponent();

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
