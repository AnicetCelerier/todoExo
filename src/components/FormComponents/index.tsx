import { Button, Form } from "semantic-ui-react";
import { TaskType } from "../../types";
import useFormComponent from "../../hooks/useFormComponents";

export type FormComponentProps = {
  onSubmit: (task: TaskType) => void;
};

const FormComponent = (props: FormComponentProps) => {
  const { handleSubmit, setTaskText, taskText } = useFormComponent(props);

  return (
    <Form>
      <Form.Field>
        <label>
          Entrez le tâche à faire :{"  "}
          <input
            type="string"
            value={taskText}
            required
            onChange={(e) => {
              setTaskText(e.target.value);
            }}
          />
        </label>
      </Form.Field>
      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
