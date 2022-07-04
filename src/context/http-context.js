import React, { createContext, useState, useEffect } from "react";

const HttpContext = createContext({
  loadData: () => {},
  search: () => {},
  data: [],
  isLoading: false,
  error: "",
});

export const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  //fetch whole data

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_PATH}`, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": `${process.env.REACT_APP_FETCH_API_KEY}`,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        });
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setData(responseData);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    };
    loadData();
  }, [setData]);

  console.log(data);

  const value = [data, isLoading, error];

  return (
    <HttpContext.Provider value={value}>{props.children}</HttpContext.Provider>
  );
};
export default HttpContext;
