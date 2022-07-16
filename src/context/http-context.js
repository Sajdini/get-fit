import React, { createContext, useState, useEffect } from "react";

const HttpContext = createContext({
  loadData: () => {},
  search: () => {},
  data: [],
  page: 1,
  increment: () => {},
  decrement: () => {},
  isFetched: false,
  isNavigated: false,
});

export const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [isFetched, setIsFetched] = useState(false);
  const [isNavigated, setIsNavigated] = useState(false);
  //fetch whole data

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_FITNESS_API_PATH}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": `${process.env.REACT_APP_FITNESS_API_KEY}`,
              "X-RapidAPI-Host": `${process.env.REACT_APP_FITNESS_API_HOST}`,
            },
          }
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setData(responseData);
        setIsFetched(true);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    };
    loadData();
  }, [setData]);

  const increment = () => {
    setPage(page + 1);
  };
  const decrement = () => {
    setPage(page - 1);
  };

  return (
    <HttpContext.Provider
      value={{
        data,
        isLoading,
        error,
        page,
        increment,
        decrement,
        isFetched,
        isNavigated,
        setIsNavigated,
      }}
    >
      {props.children}
    </HttpContext.Provider>
  );
};
export default HttpContext;
