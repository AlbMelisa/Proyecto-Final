import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <div>
      <div className="container body404">
        <h1>ERROR 404</h1>
        <img  className="imgcontainer"src="src\images\emotedeerror404.png" alt="" />
        <h1>La página que ha solicitado no se encuentra disponible</h1>
        <div className="boton">
          <button>
            <a href="/Home">Volver atrás</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
