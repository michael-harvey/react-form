import { useState, useReducer, useEffect } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("Invalid action type: ", action.type);
  }
};

const useFetch = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });

    const fetchData = async () => {
      try {
        const result = await axios(url);

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchData();

    return () => {
      // cleanup
    };
  }, []);

  return [state, setUrl];
};

export default useFetch;
