import React from "react";
import "../App.css";
import { useState } from "react";

function Exercise() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (number > 10) {
      setError("");
    } else {
      setError("Your number must be greater than 10!");
    }
  };

  return (
    <div className="main-div">
      <form>
        <div className="form-div">
          <h1 className="h1">Form </h1>

          <label>
            <p className="text">Number</p>
            <input
              type="number"
              placeholder="Please enter a number"
              onChange={handleNumberChange}
            ></input>
            {error && <p className="error">{error}</p>}
          </label>
        </div>

        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default Exercise;
