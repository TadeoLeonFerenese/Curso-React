import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  //Suma al counter//
  const handleAdd = () => {
    // console.log(event);
    // setCounter(counter + 1);
    // setCounter((c) => c + 1); // "c" es el valor de counter del useState y c+1 el set
    setCounter(counter + 1);
  };
  //Restar al counter//
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  //Resetear Counter//
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button onClick={handleReset}> reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: "No hay valor ",
};
