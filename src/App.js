import Form from "./components/Form";
import { FormProvider } from "./components/FormProvider";
import schema from "./schema.json";

function App() {
  return (
    <div>
      <h1>React form</h1>
      <FormProvider>
        <Form
          initialValues={{}}
          fieldSchema={schema}
          validationSchema={{}}
          onSubmit={false}
        />
      </FormProvider>
    </div>
  );
}

export default App;
