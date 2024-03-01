import React from "react";
import "./Contacto.css";
const Contacto = () => {
  return (
    <div>
      <br />
      <div className="Contenedor">
        <div className="contenido">
          <div className="contenidoizquierdo">
            <h2>Contactanos</h2>
            <form id="formularioContacto">
              <p>
                <label htmlFor="fullname">Nombre:</label>
                <input type="text" name="nombre" required />
              </p>
              <p>
                <label htmlFor="Email">Email:</label>
                <input type="email" name="Email" required />
              </p>
              <p>
                <label htmlFor="telefono">Telefono:</label>
                <input type="tel" name="telefono" required />
              </p>
              <p>
                <label htmlFor="enviar_mensaje">Enviar Mensaje:</label>
                <input type="text" name="enviar_mensaje" required />
              </p>
              <p className="block">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea name="mensaje" rows="3" required></textarea>
              </p>
              <p className="block">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
          <div className="contenidoderecho">
            <h4>Mas info</h4>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i> Pasaje democracia
              </li>
            </ul>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              distinctio eos dolores ut. Ullam et ducimus eveniet autem minus
              veritatis?
            </p>
            <p>Compani.com</p>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52306.52258057938!2d-67.76527255136718!3d-34.97771539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96781758e098a883%3A0x6ea3b1dc9e017a62!2sEvolution%20Gym!5e0!3m2!1ses-419!2sar!4v1705697876438!5m2!1ses-419!2sar"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Contacto;
