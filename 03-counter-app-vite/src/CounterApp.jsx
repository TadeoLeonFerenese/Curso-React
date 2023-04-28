import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleApp = () => {
    // console.log(event);
    // setCounter(counter + 1);
    setCounter((c) => c + 1); // "c" es el valor de counter del useState y c+1 el set
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleApp}> +1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: "No hay valor ",
};
