import Form from "./components/Form";
import schema from "../schema.json";

function App() {
  return (
    <div>
      <h1>React form</h1>
      <Form
        initialValues={{}}
        fieldSchema={schema}
        validationSchema={{}}
        onSubmit={false}
      />
    </div>
  );
}

export default App;
