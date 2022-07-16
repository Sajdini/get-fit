import React, { useEffect, useState } from "react";
import ExcerciseVideo from "./ExcerciseVideo";
import "./ExcerciseVideos.css";
const ExcerciseVideos = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { name } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_YT_API_PATH}${name} excercise`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": `${process.env.REACT_APP_YT_API_KEY}`,
              "X-RapidAPI-Host": `${process.env.REACT_APP_YT_API_HOST}`,
            },
          }
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setData(responseData);
        setIsLoading(false);
      } catch (err) {
        alert(err);
        setIsLoading(false);
        throw err;
      }
    };
    fetchData();
  }, [name, setData]);
  console.log(data);
  return (
    <section className="videos-section">
      <h3>
        <strong
          style={{
            textTransform: "Uppercase",
            color: "rgba(72, 92, 131, 0.822)",
          }}
        >
          {name}{" "}
        </strong>
        videos
      </h3>
      <div className="videos-container">
        {isLoading ? <h3>Loading</h3> : <ExcerciseVideo data={data.contents} />}
      </div>
    </section>
  );
};

export default ExcerciseVideos;
