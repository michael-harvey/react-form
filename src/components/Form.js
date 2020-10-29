import InputField from "./InputField";

function renderFields({ schema }) {
  const fields = [];

  for (const key in schema) {
    const { type, label } = schema[key];

    fields.push(
      <InputField type={type} label={label} id={key} key={`field-${key}`} />
    );
  }

  return fields;
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("submit");
}

function Form({ fieldSchema }) {
  return (
    <form onSubmit={handleSubmit}>
      {renderFields(fieldSchema)}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
