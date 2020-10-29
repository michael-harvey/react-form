import React from "react";

const FormStateContext = React.createContext();
const FormDispatchContext = React.createContext();

const initialState = {
  firstName: "",
  lastName: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "updateField": {
      console.log(action);

      return {
        ...state,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(formReducer, initialState);

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
}

function useFormState() {
  const context = React.useContext(FormStateContext);

  if (context === undefined) {
    throw new Error("useFormState must be used within a FormProvider");
  }

  return context;
}

function useFormDispatch() {
  const context = React.useContext(FormDispatchContext);

  if (context === undefined) {
    throw new Error("useFormDispatch must be used within a FormProvider");
  }

  return context;
}

export { FormProvider, useFormState, useFormDispatch };
