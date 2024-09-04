import axios from "axios";

export async function obtenerClima(busqueda) {
  console.log(busqueda);
  try {
    const response = await axios.post(
      `https://backweather-91gz.onrender.com/`,
      busqueda
    );

    const { temp_c, country, name, region, localtime, icon } = response.data;
    const res = { icon, temp_c, country, name, region, localtime };

    return res;
  } catch (error) {
    return console.log("No se pudo actualizar, hubo un error.");
  }
}
