import React from "react";
import { Link } from "react-router-dom";
const AutoComplete = (props) => {
  return (
    <div className="auto_complete-container">
      <ul className="auto_complete-list">
        {props.suggestions.map((suggestion, index) => {
          return (
            <li key={index} className="auto_complete-item">
              <Link to={`/list/${suggestion}`}>{suggestion}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoComplete;
