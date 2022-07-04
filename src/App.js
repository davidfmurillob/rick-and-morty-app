import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  //Funcion que realiza la petición y recibe los datos de la API
  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })

      .catch((error) => console.log(error));
  };

  //Funcion para manejar evento pagina anterior
  const onPrevious = () => {
    fetchData(info.prev);
  };
  //Funcion para manejar evento pagina siguiente

  const onNext = () => {
    fetchData(info.next);
  };

  //Efecto que ejecuta al inicio de la app la funcion fetchData

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <div className="bg-[url('./assets/watercolor-outer-space-blue-purple-background/6538480.jpg')]">
        <Navbar title="Rick and Morty" />
        <div className="container mx-auto">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          <Characters characters={characters} />
          <div className="mt-3">
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </div>
        </div>
        <p className="text-center text-slate-100 pt-10">
          By: David Murillo ❄️
        </p>
      </div>
    </>
  );
}

export default App;
