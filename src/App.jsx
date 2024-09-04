import { useEffect, useState } from "react";
import "./App.css";
import { obtenerClima } from "./api/weather";
import CardWeather from "./cardWeather";
import { Form, Formik, Field } from "Formik";

function App() {
  const [tiempo, setTiempo] = useState([]);
  const [busqueda, setBusqueda] = useState({
    busqueda: "San Miguel Buenos Aires",
  });

  useEffect(() => {
    async function fetchClima() {
      const res = await obtenerClima(busqueda);
      if (res != undefined) setTiempo(res);
    }
    fetchClima();
  }, [busqueda]);

  const { icon, temp_c, country, name, region, localtime } = tiempo;

  return (
    <>
      {!icon ? (
        "No se encontró"
      ) : (
        <CardWeather
          icon={icon}
          temp={temp_c}
          country={country}
          name={name}
          region={region}
          time={localtime}
        />
      )}

      <Formik
        initialValues={{ busqueda: "" }}
        onSubmit={(values) => {
          setBusqueda(values);
        }}
      >
        <Form>
          <Field
            className="weather"
            name="busqueda"
            type="text"
            placeholder="Buenos Aires, San Miguel"
          />
          <br />
          <button className="weather" type="submit">
            VER CLIMA
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default App;
