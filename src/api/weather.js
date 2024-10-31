import axios from "axios";

export async function obtenerClima(busqueda) {
  try {
    const response = !busqueda
      ? await axios.get(`https://backweather-production.up.railway.app/`)
      : await axios.get(
          `https://backweather-production.up.railway.app/`,
          busqueda
        );

    const { temp_c, country, name, region, localtime, icon } = response.data;
    const res = { icon, temp_c, country, name, region, localtime };

    return res;
  } catch (error) {
    return console.log("No se pudo actualizar, hubo un error.");
  }
}

// https://backweather-production.up.railway.app/
