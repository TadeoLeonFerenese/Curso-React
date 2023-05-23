export const getImagen = async () => {
  try {
    const apiKey = "j2J69UUBruluDIgbe4OD9L8iKD4httHc";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    return "No se encontro la Imagen";
  }
};

getImagen();
