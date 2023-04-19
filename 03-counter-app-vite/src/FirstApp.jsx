//Los  functionals components como este si se puede se dejan por fuera de la funcion principal por que consumen espacio en memoria cuando re re renderiza la apk
// const getSaludo = () => {
//   return "Hola Mundo :) ";
// };

// const newMessage = "Tadeo!!";
// si quiero mandar un objeto como child  si o si tenes que usar "JSON.stringify()"

export const FirstApp = ({ title, subTitle }) => {
  return (
    //esto es un fragmento, sirve para utilizar dos elementos sin tener la necesidad de poner un div
    <>
      <h1>{title}</h1>
      {/* <h1>{getSaludo()}</h1> */}
      <p>{subTitle + 1}</p>
    </>
  );
};
