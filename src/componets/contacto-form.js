import React from "react";
import icono1 from "../images/contacto11.png";
import icono2 from "../images/contacto12.png";
import icono3 from "../images/contacto13.png";
const ContactForm =()=>{
    return(<div className="contact-form">
        <p className="optional-text">
        También podés rellenar el formulario ó
enviarnos un correo a
 <a href="mailto=comercial@cooperativapopular.com.ar"> comercial@cooperativapopular.com.ar</a>
        </p>

        <div className="background-form">
        <form >
            <div className="input-item">
                <img src={icono1}alt="" />
                <label>Nombre:
                    <input type="text" />
                </label>
            </div>
            <div className="input-item">
                <img src={icono2}alt="" />
                <label>Correo:
                    <input type="email" />
                </label>
            </div>
            <div className="input-item">
                <img src={icono3}alt="" />
                <label className="label-ta">Mensaje:
                  <textarea></textarea>
                </label>
            </div>
            <div className="input-item">
               <button type="submit">Enviar</button>
            </div>
            </form>
        </div>
    </div>)
}
export default ContactForm;