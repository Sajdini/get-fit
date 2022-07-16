import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import HttpContext from "../../../context/http-context";
import AutoComplete from "./AutoComplete";
const SearchForm = () => {
  const [searchValue, setsearchValue] = useState("");
  const [suggestions, setSuggestions] = useState();
  const ctx = useContext(HttpContext);
  const { data } = ctx;
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`/list/${searchValue}`);
  };

  const onChangeHandler = (searchValue) => {
    let matches = [];
    let regex = new RegExp(`${searchValue}`, "gi");
    setsearchValue(searchValue);
    if (searchValue.length >= 3) {
      data.map((unit) => {
        Object.values(unit).forEach((el) => {
          if (el.match(regex)) matches.push(el);
          matches = matches.slice(0, 3);
        });
        setSuggestions(matches);
        return matches;
      });
      /*
        return (
          unit.name.match(regex) ||
          unit.bodyPart.match(regex) ||
          unit.equipment.match(regex) ||
          unit.target.match(regex)
        );*/
      setSuggestions(matches);
    }
    if (searchValue.length === 0) {
      setSuggestions("");
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ margin: "1rem 0" }}>
        Search for your desired excercise below
      </h2>
      <form onSubmit={submitHandler} className="form">
        <div>
          <input
            value={searchValue}
            onChange={(e) => onChangeHandler(e.target.value)}
            id="#input"
            type="text"
            placeholder="You can search for an excercise, a particual body part related excercises, or an equipment"
          />
          {suggestions && <AutoComplete suggestions={suggestions} />}
        </div>
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
