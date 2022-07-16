import React from "react";

import ExcerciseItem from "../../excercises-components/excercises-item/ExcerciseItem";

const Suggestion = (props) => {
  const slicedData = props.data.slice(0, 8);
  return (
    <div className="suggestion-container">
      <h3 style={{ color: "#ddd" }}>
        Other{" "}
        <strong
          style={{
            textTransform: "Uppercase",
            color: "rgba(72, 92, 80, 0.822)",
          }}
        >
          {props.title}
        </strong>{" "}
        excercises
      </h3>
      <div className="suggestion">
        {slicedData.map((item, index) => (
          <ExcerciseItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
