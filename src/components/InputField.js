import { useFormState, useFormDispatch } from "./FormProvider";

function InputField({ type, label, id, onChange, onBlur }) {
  const state = useFormState();
  const dispatch = useFormDispatch();

  function handleChange(e) {
    dispatch({
      type: "updateField",
      field: {
        field: id,
        value: e.target.value,
      },
    });
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        // value={state[id]}
        onChange={(e) => handleChange(e)}
        onBlur={onBlur}
      />
    </div>
  );
}

export default InputField;
