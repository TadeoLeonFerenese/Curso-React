import PropTypes from "prop-types";
//Los  functionals components como este si se puede se dejan por fuera de la funcion principal por que consumen espacio en memoria cuando re re renderiza la apk
// const getSaludo = () => {
//   return "Hola Mundo :) ";
// };

// const newMessage = "Tadeo!!";
// si quiero mandar un objeto como child  si o si tenes que usar "JSON.stringify()"

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    //esto es un fragmento, sirve para utilizar dos elementos sin tener la necesidad de poner un div
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1>{getSaludo()}</h1> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

// las proptypes sirven para especificar que tipo de props estas enviando, si es string, number, bolean
// El "isRequired" sirve para que sea si o si  enviado o salta un warning d e error
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: " No hay titulo ",
  subTitle: " No hay subTitle ",
  name: "Tadeo Leon",
};
